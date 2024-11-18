import './Employees.scss'
import employeePlaceholder from '../../assets/Employees/employeePlaceholder.png'
import Employee from '../Employee/Employee'
function Employees() {
    const employees = [
        {
            image: employeePlaceholder,
            name: 'Плодухин Денис',
            role: 'Исполнительный директор',
            description: 'Мы открытая компания и всегда рады обсудить с вами возникшие вопросы. Напишите мне письмо если оно касается качества работы наших сотрудников.',
            email: 'head@ekotap.ru'
        },
        {
            image: employeePlaceholder,
            name: 'Mr. X',
            role: 'Директор по маркетингу',
            description: 'Мы открытая компания и всегда рады обсудить с вами возникшие вопросы. Напишите мне письмо если оно касается качества работы наших сотрудников. ',
            email: 'head@ekotap.ru'
        },
        {
            image: employeePlaceholder,
            name: 'Mr. Y',
            role: 'Техническая служба',
            description: 'Собственное производство и штат инженеров позволяет быстро реагировать на запросы наших клиентов и предоставлять высокий уровень сервиса.',
            email: 'service@ekotap.ru'
        },
        {
            image: employeePlaceholder,
            name: 'Александр Ли',
            role: 'Менеджер по развитию',
            description: 'Взаимодействуем с проектными организациями дизайн студиями и застройщиками. Проводим обучение по продукту для дизайнеров интерьера.',
            email: 'info@ekotap.ru'
        },

    ]
    return (
        <section className='employees'>
            <h1>СОТРУДНИКИ</h1>
            <p>Мы рады предложить Вам продукт для вашей кухни создающий новый пользовательский опыт.</p>
            <div className="employees-grid">
                {employees.map((employee, index) => (
                    <Employee
                        key={index}
                        {...employee}
                    />
                ))}
            </div>
        </section>
    )
}
export default Employees