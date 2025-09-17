import React, { useState } from "react";
import { FlatList, Image, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const productos = [
  { id: "1", titulo: "Producto Local", precio: "$100", descripcion: "Este es un producto cargado con require.", imagen: require("../assets/images/local.png") },
  { id: "2", titulo: "Producto Online", precio: "$200", descripcion: "Este es un producto cargado desde una URL.", imagen: { uri: "https://picsum.photos/200/300" } },
  { id: "3", titulo: "Auriculares Bluetooth", precio: "$1500", descripcion: "Auriculares inalámbricos con cancelación de ruido.", imagen: { uri: "https://picsum.photos/200/301" } },
  { id: "4", titulo: "Teclado Mecánico", precio: "$2500", descripcion: "Teclado mecánico retroiluminado RGB.", imagen: { uri: "https://picsum.photos/200/302" } },
  { id: "5", titulo: "Mouse Gamer", precio: "$1200", descripcion: "Mouse con sensor óptico de alta precisión.", imagen: { uri: "https://picsum.photos/200/303" } },
  { id: "6", titulo: "Silla Ergonómica", precio: "$5000", descripcion: "Silla cómoda para largas sesiones de trabajo o gaming.", imagen: { uri: "https://picsum.photos/200/304" } },
  { id: "7", titulo: "Monitor 24''", precio: "$8000", descripcion: "Monitor Full HD de 24 pulgadas.", imagen: { uri: "https://picsum.photos/200/305" } },
  { id: "8", titulo: "Notebook", precio: "$12000", descripcion: "Notebook liviana con gran autonomía de batería.", imagen: { uri: "https://picsum.photos/200/306" } },
  { id: "9", titulo: "Mochila", precio: "$900", descripcion: "Mochila resistente al agua con compartimento para laptop.", imagen: { uri: "https://picsum.photos/200/307" } },
  { id: "10", titulo: "Smartwatch", precio: "$2200", descripcion: "Reloj inteligente con monitor de ritmo cardíaco.", imagen: { uri: "https://picsum.photos/200/308" } },
];

export default function Galeria() {
  const [busqueda, setBusqueda] = useState("");
  const [seleccionado, setSeleccionado] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [favoritos, setFavoritos] = useState([]);
  const [resizeMode, setResizeMode] = useState("cover"); // 👉 estado para resizeMode

  // Filtrar productos en tiempo real
  const productosFiltrados = productos.filter((p) =>
    p.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Manejar favoritos
  const toggleFavorito = (id) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <View style={styles.container}>
      {/* Filtro */}
      <TextInput
        style={styles.input}
        placeholder="Buscar producto..."
        value={busqueda}
        onChangeText={setBusqueda}
      />

      {/* Lista de productos */}
      <FlatList
        data={productosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const esFavorito = favoritos.includes(item.id);
          return (
            <Pressable
              style={[styles.card, esFavorito && styles.favCard]}
              onPress={() => {
                setSeleccionado(item);
                setResizeMode("cover"); // reset al abrir
                setModalVisible(true);
              }}
              onLongPress={() => toggleFavorito(item.id)}
            >
              <Image source={item.imagen} style={styles.image} />
              <Text style={styles.title}>
                {item.titulo} {esFavorito ? "⭐" : ""}
              </Text>
              <Text>{item.precio}</Text>
            </Pressable>
          );
        }}
      />

      {/* Modal con detalles */}
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {seleccionado && (
              <>
                <Image
                  source={seleccionado.imagen}
                  style={[styles.modalImage, { resizeMode }]} // 👈 dinámico
                />
                <Text style={styles.title}>{seleccionado.titulo}</Text>
                <Text>{seleccionado.descripcion}</Text>

                {/* Botones para cambiar resizeMode */}
                <View style={styles.resizeButtons}>
                  <Pressable
                    style={styles.resizeBtn}
                    onPress={() => setResizeMode("cover")}
                  >
                    <Text>Cover</Text>
                  </Pressable>
                  <Pressable
                    style={styles.resizeBtn}
                    onPress={() => setResizeMode("contain")}
                  >
                    <Text>Contain</Text>
                  </Pressable>
                  <Pressable
                    style={styles.resizeBtn}
                    onPress={() => setResizeMode("stretch")}
                  >
                    <Text>Stretch</Text>
                  </Pressable>
                </View>

                <Pressable
                  style={styles.button}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={{ color: "white" }}>Cerrar</Text>
                </Pressable>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    padding: 8,
    borderRadius: 5,
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  favCard: {
    borderWidth: 2,
    borderColor: "gold",
  },
  image: { width: 100, height: 100, marginBottom: 5 },
  title: { fontWeight: "bold" },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    margin: 20,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  resizeButtons: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "center",
  },
  resizeBtn: {
    borderWidth: 1,
    borderColor: "#333",
    padding: 6,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
  },
});
