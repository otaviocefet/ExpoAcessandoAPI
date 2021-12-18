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
        width: "80%",
        height: "35%",
        padding: 20,
        paddingTop:0,
        marginTop: 100,
    },
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    titulo: {
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    texto: {
        textAlign: "justify",
    },
})