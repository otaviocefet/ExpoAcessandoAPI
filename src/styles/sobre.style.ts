import { StyleSheet} from "react-native";

export const SobreStyle = StyleSheet.create({
    content: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    view: {
        backgroundColor: 'white',
        width: "90%",
        height: "45%",
        padding: 20,
        paddingTop:0,
        marginTop: "50%",
        
    },
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    titulo: {
        marginTop: 20,
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        textAlign: "center",
        color: 'rgb(80,75,152)',
    }, 
    texto: {
        fontSize: 15,
    },
})