import { StyleSheet} from "react-native";

export const criarcontaStyle = StyleSheet.create({
    content: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        
    },
    view: {
        marginTop: 250,
        width: "80%",
        height: "50%",
        backgroundColor: 'white',
        alignItems: "center",
        
    },
    cardButton: {
        margin:2,
        marginLeft: 0,
        marginRight: 0
    },
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        marginTop:30,
        justifyContent: "center"
    },
})