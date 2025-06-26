import axios from "axios";

const ViaCep = () => {

    let cep ="";

    const handleBuscarCep = () => {
        cep = document.querySelector('.cep').value;
        if(cep.length == 8){
            buscarCep();
        }
    }

    const buscarCep = () => {
        axios.get(`https://viacep.com.br/ws/${cep}/json`)
        .then((response) => {
            alert(JSON.stringify(response.data));

        })
    }




    return (
        <div className="ViaCep">
            <h1>ViaCep</h1>
            <input type="text" 
            className="cep"
            placeholder="00000-000" />
            <button onClick={buscarCep}>
                Buscar
            </button>
        </div>
    )
}

export default ViaCep