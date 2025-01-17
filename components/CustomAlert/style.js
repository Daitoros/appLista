import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    item: { fontSize: 18, marginVertical: 10 },
    modalBackground: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    alertContainer: {
      width: 250,
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      alignItems: 'center',
    },
    alertImage: { width: 100, height: 100, marginBottom: 10 },
    alertText: { fontSize: 18, textAlign: 'center', marginBottom: 20 },
    button: { backgroundColor: '#31CF67', padding: 10, borderRadius: 5 },
    buttonText: { color: '#fff', fontSize: 16 },
  });