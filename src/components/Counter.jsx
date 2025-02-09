import { useEffect } from "react"
import "../styles/global.css";

export default async function Counter() {
    let team1 = []
    let team2 = []
    for (let i = 0; i < 6; i++) {
        team1[i] = await sprites("https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * 150))
        team2[i] = await sprites("https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * 150))
    }
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-indigo-900 p-6">
                {/* Título */}
                <h1 className="text-white text-4xl font-bold mb-6">⚔️ Batalla Pokémon ⚔️</h1>

                {/* Área de combate */}
                <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
                    {/* Entrenador 2 (Arriba) */}
                    <div className="flex justify-center mb-6">
                        <img src="https://art.pixilart.com/2275c1b42ddf9d6.png" alt="trainer" className="w-24 h-24" />
                        <div className="grid grid-cols-6 gap-4">
                            {team1.map((pokemon, i) => (
                                <div
                                    key={i}
                                    className="w-20 h-20 bg-gray-200 border-2 border-gray-400 rounded-lg flex items-center justify-center"
                                >
                                    <img src={pokemon.sprites.front_default} alt="Pokemon" className="w-16 h-16 object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* VS */}
                    <div className="text-center my-4">
                        <span className="text-3xl font-bold text-red-500">VS</span>
                    </div>

                    {/* Entrenador 1 (Abajo) */}
                    <div className="flex justify-center">
                        <div className="grid grid-cols-6 gap-4">
                            {team2.map((pokemon, i) => (
                                <div
                                    key={i}
                                    className="w-20 h-20 bg-gray-200 border-2 border-gray-400 rounded-lg flex items-center justify-center"
                                >
                                    <img src={pokemon.sprites.front_default} alt="Pokemon" className="w-16 h-16 object-cover" />
                                </div>
                            ))}
                        </div>
                        <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/9df843f3-9cb4-4cb0-9641-3e616bed2ef5-profile_image-300x300.png" alt="trainer" className="w-20 h-20" />
                    </div>
                </div>
            </div>
        </>
    )
}

async function sprites(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data
}