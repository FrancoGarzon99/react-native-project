import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Alert, Box, Button, Modal } from 'native-base';

const ModalScanNextProduct = () => {
  return (
    <Modal isOpen={true} onClose={() => { }} >
      <Modal.Content>
        <Modal.Header>
          <Alert variant="left-accent" status="success">
            <Alert.Icon />
            <Alert.Title flexShrink={1}>Tu producto se agrego Correctamente!</Alert.Title>
          </Alert>
        </Modal.Header>
        <Modal.Body>
          <Text>
            ¿Queres guardar un producto nuevamente?
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button onPress={() => console.log("Cancelar")}>No</Button>
            <Button onPress={() => console.log("Volver a escanear")}>Si</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

const styles = StyleSheet.create({});
export default ModalScanNextProduct;
