import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Switch, ScrollView, SafeAreaView } from 'react-native';

export default function Configurations() {

  const [settings, setSettings] = useState([
    { id: 1, title: 'Notificações', description: 'Ativar notificações do aplicativo', type: 'switch', value: true },
    { id: 2, title: 'Tema', description: 'Alternar entre claro e escuro', type: 'switch', value: false },
    { id: 3, title: 'Editar Perfil', description: 'Atualizar informações pessoais', type: 'button' },
    { id: 4, title: 'Privacidade', description: 'Configurações de privacidade e segurança', type: 'button' },
    { id: 5, title: 'Sair da Conta', description: 'Encerrar a sessão atual', type: 'button', danger: true },
  ]);

  const toggleSwitch = (id) => {
    setSettings((prevSettings) =>
      prevSettings.map((setting) =>
        setting.id === id ? { ...setting, value: !setting.value } : setting
      )
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Configurações</Text>
        {settings.map((setting) => (
          <View key={setting.id} style={styles.settingItem}>
            <View style={styles.settingDetails}>
              <Text style={styles.settingTitle}>{setting.title}</Text>
              <Text style={styles.settingDescription}>{setting.description}</Text>
            </View>
            {setting.type === 'switch' && (
              <Switch
                value={setting.value}
                onValueChange={() => toggleSwitch(setting.id)}
                trackColor={{ true: 'red', false: '#666' }}
                thumbColor="#fff"
              />
            )}
            {setting.type === 'button' && (
              <TouchableOpacity
                style={[
                  styles.button,
                  setting.danger && styles.dangerButton,
                ]}
                onPress={() => alert(`${setting.title} clicado!`)}
              >
                <Text style={styles.buttonText}>
                  {setting.danger ? 'Excluir' : 'Abrir'}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  settingItem: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  settingDetails: {
    flex: 1,
    marginRight: 10,
  },
  settingTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  settingDescription: {
    fontSize: 14,
    color: '#bbb',
  },
  button: {
    padding: 10,
    backgroundColor: '#ff6347',
    borderRadius: 5,
  },
  dangerButton: {
    backgroundColor: '#d32f2f',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
