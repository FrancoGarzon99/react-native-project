import React, { useState } from 'react';
import { Dispatch, SetStateAction } from 'hoist-non-react-statics/node_modules/@types/react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Modal } from 'native-base';
import ScannActiveComponent from '../../../components/ScannActiveComponent';

interface ModalScannerProps {
  ShowHideScanner: boolean;
  setShowHideScanner: Dispatch<SetStateAction<boolean>>;
  setDataStringScanner: Dispatch<SetStateAction<{ type: string, data: string; } | undefined>>;
}

const ModalScanner = ({ ShowHideScanner, setShowHideScanner, setDataStringScanner }: ModalScannerProps) => {
  const [returnScanned, setReturnScanned] = useState<boolean>(false);
  return (
    <Modal isOpen={ShowHideScanner} onClose={() => {
      setShowHideScanner(!ShowHideScanner);
      setReturnScanned(false);
    }} >
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>Escanea tu Producto</Modal.Header>
        <Modal.Body>
          <ScannActiveComponent setShowHideScanner={setShowHideScanner} setDataStringScanner={setDataStringScanner} ShowHideScanner={ShowHideScanner} returnScanned={returnScanned} setReturnScanned={setReturnScanned} />
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            {/* <Button onPress={() => {
              setShowHideScanner(!ShowHideScanner);
              setReturnScanned(false);
            }}>Cancelar</Button> */}
            {/* {returnScanned ? <Button onPress={() => setReturnScanned(false)}>Volver a Escanear</Button> : <></>} */}
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default ModalScanner;

const styles = StyleSheet.create({});
