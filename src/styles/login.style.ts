import { StyleSheet} from "react-native";

export const loginStyle = StyleSheet.create({
    content: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        
    },
    view: {
        marginTop: 200,
        width: "80%",
        height: "48%",
        backgroundColor: 'white',
        borderColor: "black",
        alignItems: "center",
        borderWidth: 1,
    },
    container: {
        flex: 1,
    },
    image: {
        marginTop:30,
        flex: 1,
        justifyContent: "center"
    },
})