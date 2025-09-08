import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Contador: React.FC = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.counterText}>Contador: {count}</Text>
            <View style={styles.buttonRow}>
                <Button title="Sumar" onPress={() => setCount(count + 1)} />
                <Button title="Restar" onPress={() => setCount(count - 1)} />
                <Button title="Reiniciar" onPress={() => setCount(0)} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterText: {
        fontSize: 32,
        marginBottom: 24,
    },
    buttonRow: {
        flexDirection: 'row',
        gap: 12,
    },
});

export default Contador;