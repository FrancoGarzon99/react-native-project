import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Input } from 'native-base';
import { Controller, useForm } from "react-hook-form";
import firebase from '../../../DataBase/Firebase';
import { Dispatch, SetStateAction } from 'hoist-non-react-statics/node_modules/@types/react';

type FormData = {
  codigo: string;
  marca: string;
  nombre: string;
  tipo: string;
  cantidad: string;
};

interface FormNewProductProps {
  dataStringScanner: { type: string, data: string; } | undefined;
  setShowHideScanner: Dispatch<SetStateAction<boolean>>;
}

const FormNewProduct = ({ dataStringScanner, setShowHideScanner }: FormNewProductProps) => {

  const { control, register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      codigo: dataStringScanner?.data
    }
  });

  const NewProduct = async (data: FormData) => {
    await firebase.db.collection("products").add(data);
  };

  const onSubmit = handleSubmit(data => NewProduct(data));
  return (
    <View style={stylesFormNewProduct.containerForm}>
      {/* CODIGO */}
      <View style={stylesFormNewProduct.inputGroup} >

        <Text style={stylesFormNewProduct.textForm}>Codigo de barras:</Text>
        <View >
          {dataStringScanner?.data ? (
            <Controller
              render={({ field }) => <Input isReadOnly {...field} />}
              name="codigo"
              control={control}
              defaultValue={dataStringScanner?.data}

            />
          ) : (
            <Button onPress={() => setShowHideScanner(true)} title="Escanear" />

          )
          }
        </View>
        {errors.codigo && <Text style={stylesFormNewProduct.textErrorForm}>Codigo es requerido</Text>}
      </View>
      {/* MARCA */}
      <View style={stylesFormNewProduct.inputGroup}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Text style={stylesFormNewProduct.textForm}>Marca:</Text>
              <Input
                size="lg"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </>
          )}
          name="marca"
          defaultValue=""
        />
        {errors.marca && <Text style={stylesFormNewProduct.textErrorForm}>Marca es requerido</Text>}
      </View>
      {/* TIPO */}
      <View style={stylesFormNewProduct.inputGroup}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Text style={stylesFormNewProduct.textForm}>Tipo:</Text>
              <Input
                size="lg"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </>
          )}
          name="tipo"
          defaultValue=""
        />
        {errors.tipo && <Text style={stylesFormNewProduct.textErrorForm}>tipo es requerido</Text>}
      </View>
      {/* NOMBRE */}
      <View style={stylesFormNewProduct.inputGroup}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Text style={stylesFormNewProduct.textForm}>Nombre del Producto:</Text>
              <Input
                onBlur={onBlur}
                size="lg"
                onChangeText={onChange}
                value={value}
              />
            </>
          )}
          name="nombre"
          defaultValue=""
        />
        {errors.nombre && <Text style={stylesFormNewProduct.textErrorForm}>Nombre es requerido</Text>}
      </View>
      {/* CANTIDAD */}
      <View style={stylesFormNewProduct.inputGroup}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Text style={stylesFormNewProduct.textForm}>Cantidad de stock:</Text>
              <Input
                onBlur={onBlur}
                size="lg"
                onChangeText={onChange}
                value={value}
              />
            </>
          )}
          name="cantidad"
          defaultValue=""
        />
        {errors.cantidad && <Text style={stylesFormNewProduct.textErrorForm}>Cantidad es requerido</Text>}
      </View>
      {/* GUARDAR */}
      <View>
        <Button onPress={onSubmit} title="Guardar Producto" />
      </View>
    </View>
  );
};
const stylesFormNewProduct = StyleSheet.create({
  containerForm: {
    padding: 25
  },
  inputGroup: {
    marginBottom: 20
  },
  textForm: {
    fontSize: 16,
    marginBottom: 10
  },
  textErrorForm: {
    fontSize: 12,
    color: "red"
  }
});

export default FormNewProduct;

