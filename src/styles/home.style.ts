import { StyleSheet} from "react-native";

export const homeStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    botao: {
        marginBottom: -500,
        paddingHorizontal: 60,
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'deepskyblue',
      },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },

    image: {
        flex: 1,
        justifyContent: "center"
    },

})