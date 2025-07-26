import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  // Данные учеников
  const students = [
    { 
      id: 1, 
      name: "Анна Петрова", 
      subject: "Математика", 
      grade: 4.5, 
      progress: 85,
      lastLesson: "2025-01-15",
      status: "active"
    },
    { 
      id: 2, 
      name: "Максим Козлов", 
      subject: "Физика", 
      grade: 3.8, 
      progress: 70,
      lastLesson: "2025-01-14",
      status: "active"
    },
    { 
      id: 3, 
      name: "Елена Смирнова", 
      subject: "Химия", 
      grade: 4.2, 
      progress: 78,
      lastLesson: "2025-01-13",
      status: "inactive"
    },
  ];

  // Данные оценок
  const recentGrades = [
    { student: "Анна Петрова", subject: "Алгебра", grade: 5, date: "2025-01-15" },
    { student: "Максим Козлов", subject: "Механика", grade: 4, date: "2025-01-14" },
    { student: "Елена Смирнова", subject: "Органика", grade: 4, date: "2025-01-13" },
    { student: "Анна Петрова", subject: "Геометрия", grade: 5, date: "2025-01-12" },
  ];

  // Данные оплаты
  const paymentStats = {
    totalMonth: 45000,
    paidMonth: 38000,
    pendingPayments: 3
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Хедер */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="GraduationCap" size={28} className="text-blue-600" />
                <h1 className="text-xl font-semibold text-gray-900">Tutor CRM</h1>
              </div>
            </div>
            <nav className="flex space-x-6">
              <Button variant="ghost" className="text-blue-600 bg-blue-50">
                <Icon name="Home" size={16} className="mr-2" />
                Главная
              </Button>
              <Button variant="ghost" className="text-gray-600 hover:text-blue-600">
                <Icon name="Users" size={16} className="mr-2" />
                Ученики
              </Button>
              <Button variant="ghost" className="text-gray-600 hover:text-blue-600">
                <Icon name="CreditCard" size={16} className="mr-2" />
                Оплата
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Основной контент */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Статистика */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-none shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Всего учеников</p>
                  <p className="text-3xl font-bold text-gray-900">{students.length}</p>
                </div>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Icon name="Users" size={24} className="text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Доход в месяц</p>
                  <p className="text-3xl font-bold text-gray-900">{paymentStats.paidMonth.toLocaleString()} ₽</p>
                </div>
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Icon name="Banknote" size={24} className="text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Средний балл</p>
                  <p className="text-3xl font-bold text-gray-900">4.2</p>
                </div>
                <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Icon name="Star" size={24} className="text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ученики */}
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <Icon name="Users" size={20} className="mr-2 text-blue-600" />
                  Мои ученики
                </span>
                <Button size="sm">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {students.map((student) => (
                <div key={student.id} className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon name="User" size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{student.name}</h3>
                        <p className="text-sm text-gray-500">{student.subject}</p>
                      </div>
                    </div>
                    <Badge variant={student.status === 'active' ? 'default' : 'secondary'}>
                      {student.status === 'active' ? 'Активен' : 'Неактивен'}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Прогресс</span>
                      <span className="font-medium">{student.progress}%</span>
                    </div>
                    <Progress value={student.progress} className="h-2" />
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Средний балл: {student.grade}</span>
                      <span>Последний урок: {student.lastLesson}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Журнал оценок */}
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <Icon name="BookOpen" size={20} className="mr-2 text-green-600" />
                  Журнал оценок
                </span>
                <Button size="sm" variant="outline">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить оценку
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentGrades.map((grade, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{grade.student}</h4>
                    <p className="text-sm text-gray-500">{grade.subject}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge 
                      variant={grade.grade >= 4 ? 'default' : 'secondary'}
                      className={grade.grade >= 4 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                    >
                      {grade.grade}
                    </Badge>
                    <span className="text-sm text-gray-500">{grade.date}</span>
                  </div>
                </div>
              ))}
              <Button variant="ghost" className="w-full">
                Показать все оценки
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Оплата */}
        <Card className="border-none shadow-sm mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="CreditCard" size={20} className="mr-2 text-purple-600" />
              Финансы
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-blue-900">План на месяц</h3>
                  <Icon name="Target" size={20} className="text-blue-600" />
                </div>
                <p className="text-2xl font-bold text-blue-900">{paymentStats.totalMonth.toLocaleString()} ₽</p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-green-900">Получено</h3>
                  <Icon name="CheckCircle" size={20} className="text-green-600" />
                </div>
                <p className="text-2xl font-bold text-green-900">{paymentStats.paidMonth.toLocaleString()} ₽</p>
                <div className="mt-2">
                  <Progress 
                    value={(paymentStats.paidMonth / paymentStats.totalMonth) * 100} 
                    className="h-2" 
                  />
                </div>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-yellow-900">Ожидает оплаты</h3>
                  <Icon name="Clock" size={20} className="text-yellow-600" />
                </div>
                <p className="text-2xl font-bold text-yellow-900">{paymentStats.pendingPayments}</p>
                <p className="text-sm text-yellow-700">учеников</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;