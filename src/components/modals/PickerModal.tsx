import { Picker } from '@react-native-picker/picker'
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native'
import TextC from '../custom/TextC'

interface PickerModalProps {
  visible: boolean
  onClose: () => void
  value: string
  onValueChange: (value: string) => void
  options: string[]
  title: string
  unit: string
}

export default function PickerModal({
  visible,
  onClose,
  value,
  onValueChange,
  options,
  title,
  unit,
}: PickerModalProps) {
  console.log('value', value)
  //   console.log('options', options)
  console.log('visible -----', visible)
  return (
    <Modal visible={visible} transparent={true} animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={onClose}>
              <TextC style={styles.modalButton}>Cancel</TextC>
            </TouchableOpacity>
            <TextC style={styles.modalTitle}>{title}</TextC>
            <TouchableOpacity onPress={onClose}>
              <TextC style={styles.modalButton}>Done</TextC>
            </TouchableOpacity>
          </View>
          <Picker
            selectedValue={value}
            onValueChange={onValueChange}
            style={styles.picker}
            itemStyle={styles.pickerItem}
          >
            {options.map((option) => (
              <Picker.Item key={option} label={`${option} ${unit}`} value={option} />
            ))}
          </Picker>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  modalButton: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
  picker: {
    width: '100%',
    height: 200,
  },
  pickerItem: {
    fontSize: 18,
    height: 200,
  },
})
