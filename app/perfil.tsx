import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Perfil: React.FC = () => {
    const [nombre, setNombre] = useState('Juan Gomez');
    const [modalVisible, setModalVisible] = useState(false);
    const [nuevoNombre, setNuevoNombre] = useState(nombre);

    const abrirModal = () => {
        setNuevoNombre(nombre);
        setModalVisible(true);
    };

    const guardarNombre = () => {
        setNombre(nuevoNombre);
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nombre:</Text>
            <Text style={styles.value}>{nombre}</Text>
            <TouchableOpacity style={styles.button} onPress={abrirModal}>
                <Text style={styles.buttonText}>Cambiar nombre</Text>
            </TouchableOpacity>

            <Modal
                visible={modalVisible}
                transparent
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalLabel}>Nuevo nombre:</Text>
                        <TextInput
                            style={styles.input}
                            value={nuevoNombre}
                            onChangeText={setNuevoNombre}
                            placeholder="Ingrese nuevo nombre"
                        />
                        <TouchableOpacity style={styles.saveButton} onPress={guardarNombre}>
                            <Text style={styles.saveButtonText}>Guardar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.cancelButtonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
    label: { fontSize: 18, fontWeight: 'bold' },
    value: { fontSize: 20, marginBottom: 20 },
    button: { backgroundColor: '#007bff', padding: 10, borderRadius: 5 },
    buttonText: { color: '#fff', fontSize: 16 },
    modalBackground: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
    modalContainer: { backgroundColor: '#fff', padding: 20, borderRadius: 10, width: '80%', alignItems: 'center' },
    modalLabel: { fontSize: 16, marginBottom: 10 },
    input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, width: '100%', padding: 10, marginBottom: 15 },
    saveButton: { backgroundColor: '#28a745', padding: 10, borderRadius: 5, width: '100%', alignItems: 'center', marginBottom: 10 },
    saveButtonText: { color: '#fff', fontSize: 16 },
    cancelButton: { backgroundColor: '#dc3545', padding: 10, borderRadius: 5, width: '100%', alignItems: 'center' },
    cancelButtonText: { color: '#fff', fontSize: 16 },
});

export default Perfil;