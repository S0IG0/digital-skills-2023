import { useEffect, useState } from 'react';

function StatisticsTableView() {
    const [data, setData] = useState<any[]>([]); // Используйте any[] для временного массива

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // Временные данные в формате JSON массива
            const temporaryData = [
                { id: 1, section: '1', plannedHours: 40, produced: 35, actualHours: 38 },
                { id: 2, section: '2', plannedHours: 30, produced: 28, actualHours: 32 },
                { id: 3, section: '3', plannedHours: 45, produced: 42, actualHours: 44 },
                { id: 4, section: '4', plannedHours: 50, produced: 48, actualHours: 49 },
                // Добавьте другие временные данные по необходимости
            ];

            // Замените временные данные на запрос к серверу
            // const response = await axios.get('http://localhost/api/data');

            // Используйте временные данные
            setData(temporaryData);
        } catch (error) {
            console.error('An error occurred while fetching data', error);
        }
    };

    return (
        <>
            <div className="container mt-4">
                <h2>План - факт выполнения операций с разбивкой по участкам в виде таблицы</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Участок</th>
                        <th>План часов</th>
                        <th>Изготовлено</th>
                        <th>Фактически часов</th>
                        {/* Добавьте заголовки для других полей */}
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.section}</td>
                            <td>{item.plannedHours}</td>
                            <td>{item.produced}</td>
                            <td>{item.actualHours}</td>
                            {/* Вывод других полей */}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div>

            </div>
        </>
    );
}

export default StatisticsTableView;
