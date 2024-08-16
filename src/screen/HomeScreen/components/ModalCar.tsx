import React from 'react';
import { FlatList, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { Car } from '../HomeScreen';
import { styles } from '../../../theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SIXTH_COLOR } from '../../../commons/constans';

interface Props {
    isVisible: boolean;
    setShowModal: () => void;
    car: Car[];
    cleanCar: React.Dispatch<React.SetStateAction<Car[]>>;
}

export const ModalCar = ({ isVisible, car, setShowModal, cleanCar }: Props) => {
    const { width } = useWindowDimensions();
    const totalPay = (): number => {
        let total: number = 0;
        car.forEach(product => {
            total += product.price * product.totalQuantity
        });
        return total;  
    }
    const handleSendInfo = () => {
        cleanCar([]);
        setShowModal();
    }
    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={styles.contentPrincipal}>
                <View style={{
                    ...styles.contentModal,
                    width: width * 0.80}}>
                    <View style={styles.headModal}>
                        <Text style={styles.titleModal}>Mis Productos</Text>
                        <View style={styles.iconCard}>
                            <Icon
                                name='cancel'
                                size={27}
                                color={SIXTH_COLOR}
                                onPress={setShowModal} />
                        </View>
                    </View>
                    <View style={styles.headerTable}>
                        <Text style={styles.textInformation}>Producto</Text>
                        <View style={styles.headerInformation}>
                            <Text style={{
                                ...styles.textInformation,
                                marginHorizontal: 10
                            }}>Precios</Text>
                            <Text style={{
                                ...styles.textInformation,
                                marginHorizontal: 10
                            }}>Cant.</Text>
                            <Text style={{
                                ...styles.textInformation,
                                marginHorizontal: 10
                            }}>Total</Text>
                        </View>
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
                        <Text style={styles.textTotalPay}>
                            TOTAL PAGAR: ${totalPay().toFixed(2)}
                        </Text>
                    </View>

                    <TouchableOpacity
                        onPress={handleSendInfo}
                        style={styles.buttonAddCar}>
                        <Text style={styles.textButtonAddCar}>Comprar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}