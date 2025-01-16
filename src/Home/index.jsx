import { Text, View } from 'react-native';
import { styles } from './style';


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
}


