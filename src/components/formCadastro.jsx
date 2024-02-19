export function FormCadastro() {
  return (
    <form action="">
      <label htmlFor="" className="flex flex-col w-full font-semibold">
        Nome completo:
        <input
          type="text"
          className="w-full mt-2 text-lg h-10 bg-slate-700 font-semibold  px-2 py-1  rounded-md "
        />
      </label>
      <label htmlFor="" className="flex my-2 flex-col w-full font-semibold">
        Email:
        <input
          type="email"
          className="w-full mt-2 text-lg h-10 bg-slate-700 font-semibold  px-2 py-1  rounded-md "
        />
      </label>

      <label htmlFor="" className="flex my-2 flex-col w-full font-semibold">
        Senha:
        <input
          type="email"
          className="w-full mt-2 text-lg h-10 bg-slate-700 font-semibold  px-2 py-1  rounded-md "
        />
      </label>
      <label htmlFor="" className="flex my-2 flex-col w-full font-semibold">
        Data de nascimento:
        <input
          type="date"
          id="data_nascimento"
          name="data_nascimento"
          className="w-full mt-2 text-lg h-10 bg-slate-700 font-semibold  px-2 py-1  rounded-md "
          required
        />
      </label>
      <div className="w-full flex">
        <label htmlFor="" className="flex my-2 flex-col w-full font-semibold">
          País:
          <select
            name="country"
            className="w-full mt-2 text-lg h-10 overflow-y-scroll bg-slate-700 font-semibold  px-2 py-1  rounded-md "
          >
            <optgroup label="América do Sul">
              <option value="AR">Argentina</option>
              <option value="BO">Bolívia</option>
              <option value="BR">Brasil</option>
              <option value="CL">Chile</option>
              <option value="CO">Colômbia</option>
              <option value="EC">Equador</option>
              <option value="GY">Guiana</option>
              <option value="PE">Peru</option>
              <option value="PY">Paraguai</option>
              <option value="SR">Suriname</option>
              <option value="UY">Uruguai</option>
              <option value="VE">Venezuela</option>
            </optgroup>
            <optgroup label="América do Norte">
              <option value="US">Estados Unidos</option>
              <option value="CA">Canadá</option>
              <option value="MX">México</option>
            </optgroup>
            <optgroup label="Europa">
              <option value="AL">Albânia</option>
              <option value="DE">Alemanha</option>
              <option value="AD">Andorra</option>
              <option value="AT">Áustria</option>
              <option value="BE">Bélgica</option>
              <option value="BA">Bósnia e Herzegovina</option>
              <option value="BG">Bulgária</option>
              <option value="CY">Chipre</option>
              <option value="HR">Croácia</option>
              <option value="DK">Dinamarca</option>
              <option value="SK">Eslováquia</option>
              <option value="SI">Eslovênia</option>
              <option value="ES">Espanha</option>
              <option value="EE">Estônia</option>
              <option value="FI">Finlândia</option>
              <option value="FR">França</option>
              <option value="GR">Grécia</option>
              <option value="HU">Hungria</option>
              <option value="IE">Irlanda</option>
              <option value="IS">Islândia</option>
              <option value="IT">Itália</option>
              <option value="XK">Kosovo</option>
              <option value="LV">Letônia</option>
              <option value="LI">Liechtenstein</option>
              <option value="LT">Lituânia</option>
              <option value="LU">Luxemburgo</option>
              <option value="MK">Macedônia do Norte</option>
              <option value="MT">Malta</option>
              <option value="MD">Moldávia</option>
              <option value="MC">Mônaco</option>
              <option value="ME">Montenegro</option>
              <option value="NO">Noruega</option>
              <option value="NL">Países Baixos</option>
              <option value="PL">Polônia</option>
              <option value="PT">Portugal</option>
              <option value="CZ">República Tcheca</option>
              <option value="RO">Romênia</option>
              <option value="GB">Reino Unido</option>
              <option value="RU">Rússia</option>
              <option value="SM">San Marino</option>
              <option value="RS">Sérvia</option>
              <option value="SE">Suécia</option>
              <option value="CH">Suíça</option>
              <option value="TR">Turquia</option>
              <option value="UA">Ucrânia</option>
              <option value="VA">Vaticano</option>
            </optgroup>
          </select>
        </label>

        <label
          htmlFor=""
          className="flex my-2 ml-4 flex-col w-full font-semibold"
        >
          Estados:
          <select
            name="state"
            className="w-full mt-2  text-lg h-10 bg-slate-700 font-semibold  px-2 py-1  rounded-md "
          >
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
        </label>
      </div>

      <button className="w-full h-9 mt-3 bg-primary rounded-md  text-slate-800 font-semibold hover:bg-lime-500 ">
        Cadastrar-se
      </button>
    </form>
  );
}
