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
        marginTop: 80,
        width: "80%",
        height: "45%",
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
})