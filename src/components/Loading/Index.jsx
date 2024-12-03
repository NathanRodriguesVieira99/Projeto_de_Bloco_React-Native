import { View, ActivityIndicator } from 'react-native'

export function Loading() {
  return (
    <View>
      <ActivityIndicator size={'small'} color='#ff0000' />
    </View>
  )
}