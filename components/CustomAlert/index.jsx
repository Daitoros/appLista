import { styles } from './style';
import { View, Text, Modal, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export const closeAlert = () => {
    setAlertVisible(false);
}

export const customAlert = ({ isVisible, onClose, message, imageSource }) => (
    <Modal transparent={true} visible={isVisible} animationType="fade">
      <View style={styles.modalBackground}>
        <View style={styles.alertContainer}>
          <Image source={imageSource} style={styles.alertImage} />
          <Text style={styles.alertText}>{message}</Text>
          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );