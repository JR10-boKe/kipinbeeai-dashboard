export default async function Dashboard() {
  const data = [
    { id: 1, numero: "C-20250701", cliente: "Acme Corp", ganancia: 120000 },
    { id: 2, numero: "C-20250702", cliente: "Globex", ganancia: -15000 },
    { id: 3, numero: "C-20250703", cliente: "Initech", ganancia: 80000 },
  ];

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Operaciones en curso</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Carpeta</th>
            <th className="p-2">Cliente</th>
            <th className="p-2">Ganancia</th>
          </tr>
        </thead>
        <tbody>
          {data.map((op) => (
            <tr key={op.id} className="odd:bg-white even:bg-gray-50">
              <td className="p-2">{op.numero}</td>
              <td className="p-2">{op.cliente}</td>
              <td className={\`p-2 \${op.ganancia < 0 ? 'text-red-600' : ''}\`}>
                ${'{op.ganancia.toLocaleString()}'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
