import React from 'react';
import { FlatList, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Car } from '../HomeScreen/HomeScreen';
import { styles } from '../../theme/appTheme';
import { SIXTH_COLOR } from '../../commons/constans';
import { useNavigation } from '@react-navigation/native';


interface Props {
    isVisible: boolean;
    setShowModal: () => void;
    car: Car[];
    cleanCar: React.Dispatch<React.SetStateAction<Car[]>>;
}

export const ProductScreen = ({ isVisible, car, setShowModal, cleanCar }: Props) => {
    const navigation = useNavigation();
    
    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View>
                <View>
                        <Text style={styles.titleModal}>Mis Productos</Text>
                        
                    <View style={styles.headerTable}>
                        <Text style={styles.textInformation}>Producto</Text>
                        
                    </View>
                    <FlatList
                        data={car}
                        renderItem={({ item }) =>
                            <View style={styles.headerTable}>
                                <Text>{item.name}</Text>
                                <View style={styles.headerInformation}>
                                    <Text style={{ marginHorizontal: 10 }}>
                                        {item.price.toFixed(2)}
                                    </Text>
                                    <Text style={{ marginHorizontal: 20 }}>
                                        {item.totalQuantity}
                                    </Text>
                                    <Text style={{ marginHorizontal: 10 }}>
                                        {(item.price * item.totalQuantity).toFixed(2)}
                                    </Text>
                                </View>
                            </View>
                        }
                        keyExtractor={item => item.id.toString()} />
                    
                    <View style={{ alignItems: 'flex-end', margin:10 }}>
                        
                    </View>

                    <TouchableOpacity
                        
                        style={styles.buttonAddCar}>
                        <Text style={styles.textButtonAddCar}>Comprar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}