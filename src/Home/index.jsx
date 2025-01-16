import { styles } from './style';
import { useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";


export function Home(){
    // return (
    //     <View style={styles.container}>
    //         <Text style={styles.text}>Open up App.js to start working on your app!</Text>
    //     </View>
    // )
    const [itens, setItens ] = useState([]);        // Cria um array vazio de itens e o estabelece no react como um estado dinâmico. setItens será usado para adicionar itens no array.
    const [nomeItem, setNomeItem] = useState('');    // Cria array de nome do item para ser preenchido pelo input.

    function AddItem() {
        
        if (itens.includes(nomeItem)) {             // Checa se o item escrito no input já existe no array de itens
            return Alert.alert("Item já existe", "Já existe um item na lista com esse nome.");
          }
      
          setItens(prevState => [...prevState,nomeItem]);       // Isso pega a lista atual de itens e atualiza adicionando um novo item no final, o que está no input
          setNomeItem('');                                      // Reseta o input, deixando em branco
    }

    function RemoverItem(name) {
        // return console.log(alunos.filter(aluno => aluno !== name))
        Alert.alert("Remover",`Remover o item ${name}?`,[
            {
                text: 'Sim',
                onPress: () => setItens(prevState => prevState.filter(item => item !== name))    //Aqui o filter vai iterar cada elemento do array, aqui chamado de "item". Então o "setItens" vai atualizar a lista de itens para que tenha todos os elementos com exceção do item citado.
            },
            {
                text: 'Não',
                style:'cancel'
            }
        ])
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Compras pra Mãe
            </Text>
            <Text style={styles.text}>
                Lista de Mercado
            </Text>

            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Adicione o item"
                    placeholderTextColor="#6B6B6B"
                    // onChangeText={texto => console.log(texto)}
                    // onChangeText={texto => setNomeAluno(texto)}
                    onChangeText={setNomeItem}                          //Atualiza o estado NomeItem ("setNomeItem" é usado para atualizar o estado NomeItem)
                    value={nomeItem}                                    //Exibe o valor do campo atual
                />

                <TouchableOpacity style={styles.button}                 //Botão clicável. "onPress"(ao ser pressionado) aciona a função AddItem
                                        onPress={AddItem} >         
                    <Text style={styles.buttonText}>
                        ➕
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList                                                   //Componente que renderiza listas
                data={itens}                                            //Carrega a lista de itens, no estado itens
                keyExtractor={(item) => item}                           //Define uma chave para cada item
                renderItem={({ item })=> (                              //Define como cada item será renderizado
                    <Itens
                        key={item}
                        name={item}                                     //nomeia os itens
                        onRemove={() => RemoverItem(item)}              //ao remover o item, aciona a função removendo da lista. (O botão de remover está dentro de Itens)
                    />
                )}
                showsVerticalScrollIndicator={false}                    //Remove a barra de rolagem lateral
                ListEmptyComponent={() => (                             //O que exibir em caso de lista vazia
                    <Text style={styles.listEmptyText}>
                        Nenhum item adicionado
                    </Text>
                )}
            />
        </View>
    )

}


