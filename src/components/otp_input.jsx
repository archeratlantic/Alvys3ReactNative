import React,{useState} from "react";
import { StyleSheet, Text } from "react-native";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

export default function OtpInput() {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: 6});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
return (
  <CodeField
  ref={ref}
  {...props}
  value={value}
  onChangeText={setValue}
  cellCount={6}
  rootStyle={styles.codeFiledRoot}
  keyboardType="number-pad"
  textContentType="oneTimeCode"
  autoFocus={true}
  renderCell={({index, symbol, isFocused}) => (
    
    <Text
      key={index}
      style={[styles.cell, isFocused && styles.focusCell]}
      onLayout={getCellOnLayoutHandler(index)}>
      {symbol || (isFocused ? <Cursor /> : null)}
    </Text>
  )}
/>
)
}
const styles = StyleSheet.create({
 
  root: {padding: 20, minHeight: 300},
  title: {textAlign: 'center', fontSize: 30},
  codeFiledRoot: {marginBottom: 20},
  cell: {
    width: 55,
    height: 55,
    alignItems:"center",
    justifyContent:"center",
    alignSelf:"center",
    lineHeight:60,
    fontSize: 24,
    marginHorizontal:2,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: '#7C7C7C',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#233E90',
    borderWidth:2
  },
 
});
