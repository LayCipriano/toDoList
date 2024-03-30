export const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
        <h2>Filtrar Resultados</h2>
        <div className="filter-options">
            <div>
                <p>Status</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Concluídas</option>
                    <option value="Incomplete">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordenar por:</p>
                <button onClick={() => setSort("A - Z")}>A - Z</button>
                <button onClick={() => setSort("Z - A")}>Z - A</button>
            </div>
        </div>
    </div>
  )
}