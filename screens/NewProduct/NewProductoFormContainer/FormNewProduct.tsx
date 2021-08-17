import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Input } from 'native-base';
import { Controller, useForm } from "react-hook-form";
import firebase from '../../../DataBase/Firebase';
import { Dispatch, SetStateAction } from 'hoist-non-react-statics/node_modules/@types/react';

type FormData = {
  code: string;
  brand: string;
  name: string;
  type: string;
  quantity: string;
  price: string;

};

interface FormNewProductProps {
  dataStringScanner: { type: string, data: string; } | undefined;
  setShowHideScanner: Dispatch<SetStateAction<boolean>>;
  fnNavigation: any;
}

const FormNewProduct = ({ dataStringScanner, setShowHideScanner, fnNavigation }: FormNewProductProps) => {

  const { control, register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      code: dataStringScanner?.data
    }
  });

  const NewProduct = async (data: FormData) => {
    await firebase.db.collection("products").add(data);
  };

  const onSubmit = handleSubmit(data => NewProduct(data).then(res => fnNavigation.props.navigation.replace('Lista de Productos')));

  return (
    <View style={stylesFormNewProduct.containerForm}>
      {/* CODIGO */}
      <View style={stylesFormNewProduct.inputGroup} >

        <Text style={stylesFormNewProduct.textForm}>Codigo de barras:</Text>
        <View >
          {dataStringScanner?.data ? (
            <Controller
              render={({ field }) => <Input isReadOnly {...field} />}
              name="code"
              control={control}
              defaultValue={dataStringScanner?.data}

            />
          ) : (
            <Button onPress={() => setShowHideScanner(true)} title="Escanear" />
          )
          }
        </View>
        {errors.code && <Text style={stylesFormNewProduct.textErrorForm}>Codigo es requerido</Text>}
      </View>
      {/* PRECIO */}
      <View style={stylesFormNewProduct.inputGroup}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Text style={stylesFormNewProduct.textForm}>Precio</Text>
              <Input
                onBlur={onBlur}
                size="lg"
                onChangeText={onChange}
                value={value}
              />
            </>
          )}
          name="price"
          defaultValue=""
        />
        {errors.price && <Text style={stylesFormNewProduct.textErrorForm}>Precio es requerido</Text>}
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
          name="name"
          defaultValue=""
        />
        {errors.name && <Text style={stylesFormNewProduct.textErrorForm}>Nombre es requerido</Text>}
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
          name="brand"
          defaultValue=""
        />
        {errors.brand && <Text style={stylesFormNewProduct.textErrorForm}>Marca es requerido</Text>}
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
          name="type"
          defaultValue=""
        />
        {errors.type && <Text style={stylesFormNewProduct.textErrorForm}>Tipo es requerido</Text>}
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
          name="quantity"
          defaultValue=""
        />
        {errors.quantity && <Text style={stylesFormNewProduct.textErrorForm}>Cantidad es requerido</Text>}
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

