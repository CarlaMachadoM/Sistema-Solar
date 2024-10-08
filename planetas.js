const planetas = [
	{"position": "1",
	 "name": "Mercurio",
	 "image": "https://i.seadn.io/gae/RNqgyfqEWDQgV7qMiSX_D74PWAmFa3T0a3HwKwFNht-e_mpdq4QKPGOSbVset8ZzC9z3pzlaTaktRd4-oTBphjM3EwPaWd_Fvt31?auto=format&dpr=1&w=1000",
	 "velocity": "~47,48 Km/s",
	 "distance": "~57,91 M de Km",
	 "description": "Mercúrio é o planeta mais próximo do Sol e o menor do nosso sistema solar. Com um diâmetro de aproximadamente 4.880 quilômetros, é apenas um pouco maior que a Lua da Terra. Devido à sua proximidade com o Sol, Mercúrio experimenta temperaturas extremas, variando de cerca de -173 °C à noite a 427 °C durante o dia."
	},
	{"position": "2",
	 "name": "Vênus",
	 "image": "https://i.seadn.io/s/raw/files/3dad20369c1b1d71ec0407ea8b6a1fd4.gif?auto=format&dpr=1&w=1000",
	 "velocity": "~35,02 Km/s",
	 "distance": "~108,21 M de Km",
	 "description": 'Vênus é o segundo planeta a partir do Sol e o segundo objeto mais brilhante no céu noturno, atrás apenas da Lua. Nomeado em homenagem à deusa romana do amor e da beleza, Vênus é o segundo maior planeta terrestre e é frequentemente chamado de "planeta irmão da Terra" devido ao seu tamanho e massa semelhantes.<br> A superfície do planeta está coberta por uma camada opaca de nuvens compostas de ácido sulfúrico. Se tiver interesse, posso compartilhar mais sobre as condições climáticas de Vênus ou suas missões espaciais!'
	},
	{"position": "3",
	 "name": "Terra",
	 "image": "https://i.seadn.io/gae/hyEeU0Lr6P22oYEIpQaZh2fOT60kBXcNwLfKIXW0XFkXdK4UkF0kwMGf6xQ5rucVJMnkopxHT_2V-vU0MDbxL0MaG3jIcaDCmhDIiA?auto=format&dpr=1&w=1000",
	 "velocity": "~29,78 Km/s",
	 "distance": "~149,6 M de Km",
	 "description": "A Terra é o terceiro planeta a partir do Sol e é o maior dos planetas terrestres. É a única planeta do nosso sistema solar que não recebeu o nome de uma divindade grega ou romana. <br> A Terra se formou há aproximadamente 4,54 bilhões de anos e é o único planeta conhecido que suporta vida. "
	},
	{"position": "4",
	 "name": "Marte",
	 "image": "https://i.seadn.io/gae/hyh2JKj3DqFQwnhhwi_VdTg6VdcJFG1LijsFm2G9LmkVvMI9EsAYPou2aDlDGFRwXCgH_rLQvjNIGIAj_iCqVhK60DBfLlYSMrOVSPg?auto=format&dpr=1&w=1000",
	 "velocity": "~24,07 Km/s",
	 "distance": "~227,94 M de Km",
	 "description": 'Marte é o quarto planeta a partir do Sol e o segundo menor do sistema solar. Nomeado em homenagem ao deus romano da guerra, Marte é frequentemente chamado de "Planeta Vermelho" devido à sua aparência avermelhada.<br> Trata-se de um planeta terrestre com uma atmosfera fina, composta principalmente de dióxido de carbono.'
	},
	{"position": "5",
     "name": "Jupiter",
	 "image": "https://i.seadn.io/gae/DiLOYk4ZYG9uXiJ0izhuFSNoLnzxY6wdoAfbXioifEUQEDQUmjtDIfJf0Mdns-DY1fT5IN2zHTPVyu69qWcq4c4uRpBkjCt48YIr8Q?auto=format&dpr=1&w=1000",
	 "velocity": "~13,07 Km/s",
	 "distance": "~778,5 M de Km",
	 "description": 'Júpiter é o quinto planeta a partir do Sol e possui uma massa duas vezes e meia maior do que a soma das massas de todos os outros planetas do sistema solar.<br> Composto principalmente de gases, Júpiter é conhecido como um "gigante gasoso".'
	},
	{"position": "6",
	 "name": "Saturno",
	 "image": "https://i.seadn.io/gae/GWpiotLeOb3PuZsOSPD8HA14sVMc0cqGE83WBIw3lCwgWLEuN0J80MdNm980IiSHTsBV7WR-7wngq7NZINrKoGYDUF0F-WHFh_q6?auto=format&dpr=1&w=1000",
	 "velocity": "~9,69 Km/s",
	 "distance": "~143 B de Km",
	 "description": "Saturno é o sexto planeta a partir do Sol e é o mais distante que pode ser observado a olho nu. É o segundo maior planeta do sistema solar e é mais conhecido pelo seu magnífico sistema de anéis, que foi observado pela primeira vez em 1610 pelo astrônomo Galileu Galilei.<br> Assim como Júpiter, Saturno é um gigante gasoso, composto principalmente de hidrogênio, hélio e metano."
	},
	{"position": "7",
	 "name": "Urano",
	 "image": "https://i.seadn.io/gae/kOInpdIoRs3NquU4L1ATaPNysXnlrKPSACqnDwJqrH6pOM5lgjRRnH4mNc63Q3nYUGY-Xq45-fjceMPv10Om-3bb8Y3mayXiXOLR?auto=format&dpr=1&w=1000",
	 "velocity": "~6,81 Km/s",
	 "distance": "~287 B de Km",
	 "description": 'Urano é o sétimo planeta a partir do Sol. Embora seja visível a olho nu, sua baixa luminosidade e órbita lenta fizeram com que não fosse reconhecido como um planeta por muito tempo. Urano foi o primeiro planeta descoberto com o uso de um telescópio.<br> Uma de suas características mais notáveis é sua inclinação axial de 98 graus, o que faz com que seja frequentemente descrito como "rolando ao redor do Sol de lado".'
	},
	{"position": "8",
	 "name": "Netuno",
	 "image": "https://i.seadn.io/gae/Hg3VWuYjCdelVkl5VvPyzDkCkUXvA7ep6pN6C1Jvc-0T-2kPu6YX41bL748cKzIHNuMB3trVWXGywJNOVIhLVTH4RI4S10ExYTDSPQ?auto=format&dpr=1&w=1000",
	 "velocity": "~5,43 Km/s",
	 "distance": "~4,5 B de Km",
	 "description": "Netuno é o oitavo planeta a partir do Sol, o que o torna o mais distante do sistema solar. Este gigante gasoso pode ter se formado muito mais próximo do Sol no início da história do sistema solar, antes de migrar para sua posição atual."
	},
	{"position": "9",
	 "name": "Sol",
	 "image": "https://64.media.tumblr.com/d83ca753ffd2943524c0210f4aa21239/tumblr_nqpz5r2cdm1qbw2q1o1_640.gifv",
	 "velocity": "~2 km/s",
	 "distance": "~0",
	 "description": "O Sol (ou Sol, em latim) é a estrela no centro do nosso sistema solar e é responsável pelo clima e tempo da Terra. Ele é quase uma esfera perfeita, com uma diferença de apenas 10 km no diâmetro entre os polos e o equador.<br> O raio médio do Sol é de 695.508 km, o que é aproximadamente 109,2 vezes o da Terra, sendo que 20 a 25% desse volume corresponde ao núcleo."
	}
]


let container = document.querySelector(".container");


let botoes = document.querySelectorAll(".planeta");

for (let botao of botoes) {
	botao.addEventListener('click', function(){
		addPlaneta(botao.value);
	});
}

function addPlaneta(pos){
	container.innerHTML = `
	<div class='card'style='background-image: url("${planetas[pos].image}")' >
		<span class='card-infos'>
			<span class='infos'>
				<h3>Nome:</h3>
				<p>${planetas[pos].name}</p>
			</span>
			<span class='infos'>
				<h3>Velocidade rotação:</h3>
				<p>${planetas[pos].velocity}</p>
			</span>
			<span class='infos'>
				<h3>Distância do Sol:</h3>
				<p>${planetas[pos].distance}</p>
			</span>
			
		</span>
		<span class='descricao'>
				<h3>Descrição:</h3>
				<p>${planetas[pos].description}</p>
		</span>
	</div>
	`
}