import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR, THIRD_COLOR, SECUNDARY_COLOR, INPUT_COLOR, FOURTH_COLOR, FIVE_COLOR, ZERO_COLOR, SEVENTH_COLOR, EIGHT_COLOR } from '../commons/constans';

export const styles = StyleSheet.create({

    globalTitle: {
        color: FOURTH_COLOR,
        fontSize: 27,
        paddingHorizontal: 20,
        paddingVertical: 20,
        fontWeight: 'bold'
    },

    contentBody: {
        backgroundColor: SECUNDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 40,
        paddingTop: 35
    },

    imageLogin: { 
        width: 120,
        height: 125,
        alignSelf: 'center',
        marginBottom: 20,
        borderRadius:300,
        marginTop:22
        
    }, 

    textBody: {
        alignSelf:'center',
        fontSize: 18,
    },

    inputText: {
        backgroundColor: INPUT_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        borderStyle:'dashed',
        borderColor: '#a0bab8',
        borderWidth: 1,
        marginTop: -2

    },

    contentInput: {
        marginTop: 10,
        gap: 10
    },

    button: {
        backgroundColor: ZERO_COLOR,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 30
    },

    buttonText: {
        color: SECUNDARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    iconPassword:{
        position:'absolute',
        right:20,
        zIndex:1, 
        marginTop:10
    },

    textRedirection:{
        marginTop:30,
        fontSize:18,
        color:FIVE_COLOR,
        fontWeight:'bold',
        textAlign:'center',
    },

    imageRegister:{
        width: 120,
        height: 125,
        alignSelf: 'center',
        marginBottom: 20,
        borderRadius:300
    },

    textRegister:{
        textAlign: 'center',
        fontSize: 30,
        color:'black',
        fontWeight:'bold',
        marginBottom: 20,
    },

    titleRegister:{
        textAlign: 'center',
        fontSize: 30,
        color:'#6b1fab',
        fontWeight:'bold',
        marginBottom: 20,
    },

    container:{
        flex:1,
        padding:10,
        backgroundColor:THIRD_COLOR,
    },

    containerHome:{
        flex:1,
        padding:20,
        backgroundColor:THIRD_COLOR,
    },


    contentCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1.5,
        borderRadius: 20,
        marginTop:10,
        backgroundColor: EIGHT_COLOR,
        borderStyle:'dashed',
    },

    titleCard: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15
    },

    imageCard: {
        width: 70,
        height: 70,
        marginRight:20
    },

    iconCard: {
        flex: 1,
        alignItems: 'flex-end'
    },

    contentPrincipal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    
    contentModal: {
        padding: 25,
        backgroundColor: SECUNDARY_COLOR,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    headModal: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        padding: 10
    },

    titleModal: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold'
    },
    
    imageModal: {
        width: 200,
        height: 200,
        margin:30
    },
    
    contentQuantity: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonQuantity: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: ZERO_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
    },

    textButtonQuantity: {
        color: SECUNDARY_COLOR,
        fontSize: 20,
        fontWeight: 'bold'
    },

    textQuantity: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center'
    },

    buttonAddCar: {
        marginTop: 15,
        backgroundColor: ZERO_COLOR,
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center'
    },

    textButtonAddCar: {
        color: SECUNDARY_COLOR,
        fontWeight: 'bold'
    },

    messageStock: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#a92424',
        textAlign: 'center'
    },

    contentHeaderHome: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: SEVENTH_COLOR
    },

    contentHome: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: SECUNDARY_COLOR
    },

    iconCardHome: {
        flex: 1,
        alignItems: 'flex-end',
        paddingHorizontal: 33
    },

    textIconCard: {
        backgroundColor: SECUNDARY_COLOR,
        borderRadius: 20,
        paddingHorizontal: 5,
        fontSize: 13,
        fontWeight: 'bold'
    },

    headerTable: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    
    headerInformation: {
        flexDirection: 'row',
    },

    textInformation: {
        fontWeight: 'bold', 
        color: '#000', 
        marginTop:10
    },

    textTotalPay: { 
        marginTop: 7, 
        fontSize: 16, 
        fontWeight: 'bold' 
    }

});