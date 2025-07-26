import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

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
      status: "active",
      avatar: "АП",
      nextLesson: "2025-01-20 15:00"
    },
    { 
      id: 2, 
      name: "Максим Козлов", 
      subject: "Физика", 
      grade: 3.8, 
      progress: 70,
      lastLesson: "2025-01-14",
      status: "active",
      avatar: "МК",
      nextLesson: "2025-01-19 16:30"
    },
    { 
      id: 3, 
      name: "Елена Смирнова", 
      subject: "Химия", 
      grade: 4.2, 
      progress: 78,
      lastLesson: "2025-01-13",
      status: "inactive",
      avatar: "ЕС",
      nextLesson: null
    },
  ];

  // Данные оценок
  const recentGrades = [
    { student: "Анна Петрова", subject: "Алгебра", grade: 5, date: "2025-01-15", type: "Контрольная" },
    { student: "Максим Козлов", subject: "Механика", grade: 4, date: "2025-01-14", type: "Домашнее задание" },
    { student: "Елена Смирнова", subject: "Органика", grade: 4, date: "2025-01-13", type: "Самостоятельная" },
    { student: "Анна Петрова", subject: "Геометрия", grade: 5, date: "2025-01-12", type: "Устный ответ" },
  ];

  // Данные оплаты
  const paymentStats = {
    totalMonth: 45000,
    paidMonth: 38000,
    pendingPayments: 3
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Боковое меню */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 shadow-sm z-20">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
              <Icon name="GraduationCap" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">TutorCRM</h1>
              <p className="text-sm text-gray-500">Панель управления</p>
            </div>
          </div>

          <nav className="space-y-2">
            <Button variant="ghost" className="w-full justify-start bg-blue-50 text-blue-600 hover:bg-blue-100">
              <Icon name="Home" size={18} className="mr-3" />
              Главная
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-blue-600 hover:bg-gray-50">
              <Icon name="Users" size={18} className="mr-3" />
              Ученики
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-blue-600 hover:bg-gray-50">
              <Icon name="Calendar" size={18} className="mr-3" />
              Расписание
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-blue-600 hover:bg-gray-50">
              <Icon name="CreditCard" size={18} className="mr-3" />
              Финансы
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-blue-600 hover:bg-gray-50">
              <Icon name="BookOpen" size={18} className="mr-3" />
              Материалы
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-blue-600 hover:bg-gray-50">
              <Icon name="BarChart3" size={18} className="mr-3" />
              Аналитика
            </Button>
          </nav>
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
            <div className="flex items-center space-x-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-blue-500 text-white text-xs">ИП</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">Иван Петров</p>
                <p className="text-xs text-gray-500 truncate">Репетитор математики</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Основной контент */}
      <main className="ml-64 p-8">
        {/* Хедер */}
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Добро пожаловать! 👋</h1>
              <p className="text-gray-600 mt-1">Вот обзор вашей работы на сегодня</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button size="sm" variant="outline">
                <Icon name="Bell" size={16} className="mr-2" />
                Уведомления
              </Button>
              <Button size="sm">
                <Icon name="Plus" size={16} className="mr-2" />
                Добавить ученика
              </Button>
            </div>
          </div>
        </header>

        {/* Статистика с градиентами */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-none shadow-lg hover-lift overflow-hidden">
            <CardContent className="p-0">
              <div className="gradient-primary p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm font-medium">Всего учеников</p>
                    <p className="text-3xl font-bold">{students.length}</p>
                    <p className="text-blue-100 text-xs mt-1">+2 в этом месяце</p>
                  </div>
                  <div className="h-12 w-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Icon name="Users" size={24} className="text-white" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover-lift overflow-hidden">
            <CardContent className="p-0">
              <div className="gradient-success p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm font-medium">Доход в месяц</p>
                    <p className="text-3xl font-bold">{paymentStats.paidMonth.toLocaleString()} ₽</p>
                    <p className="text-green-100 text-xs mt-1">84% от плана</p>
                  </div>
                  <div className="h-12 w-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Icon name="Banknote" size={24} className="text-white" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover-lift overflow-hidden">
            <CardContent className="p-0">
              <div className="gradient-warning p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-100 text-sm font-medium">Средний балл</p>
                    <p className="text-3xl font-bold">4.2</p>
                    <p className="text-orange-100 text-xs mt-1">Отличная динамика</p>
                  </div>
                  <div className="h-12 w-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Icon name="Star" size={24} className="text-white" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover-lift overflow-hidden">
            <CardContent className="p-0">
              <div className="gradient-purple p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100 text-sm font-medium">Занятий на неделе</p>
                    <p className="text-3xl font-bold">12</p>
                    <p className="text-purple-100 text-xs mt-1">3 сегодня</p>
                  </div>
                  <div className="h-12 w-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Icon name="Calendar" size={24} className="text-white" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ученики */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-lg hover-lift">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Icon name="Users" size={20} className="mr-2 text-blue-600" />
                    Мои ученики
                  </span>
                  <Button size="sm" className="gradient-primary">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Добавить
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {students.map((student) => (
                  <div key={student.id} className="p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all duration-200 border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="bg-blue-500 text-white font-medium">
                            {student.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-gray-900">{student.name}</h3>
                          <p className="text-sm text-gray-500">{student.subject}</p>
                        </div>
                      </div>
                      <Badge 
                        variant={student.status === 'active' ? 'default' : 'secondary'}
                        className={student.status === 'active' ? 'bg-green-100 text-green-800 hover:bg-green-100' : 'bg-gray-100 text-gray-600'}
                      >
                        {student.status === 'active' ? 'Активен' : 'Неактивен'}
                      </Badge>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Прогресс обучения</span>
                        <span className="font-medium text-gray-900">{student.progress}%</span>
                      </div>
                      <Progress value={student.progress} className="h-2" />
                      
                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div className="text-sm">
                          <span className="text-gray-500">Средний балл:</span>
                          <span className="font-medium text-gray-900 ml-2">{student.grade}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-500">Последний урок:</span>
                          <span className="font-medium text-gray-900 ml-2">{student.lastLesson}</span>
                        </div>
                      </div>
                      
                      {student.nextLesson && (
                        <div className="mt-3 p-2 bg-blue-50 rounded-lg border border-blue-100">
                          <div className="flex items-center text-sm">
                            <Icon name="Clock" size={14} className="text-blue-600 mr-2" />
                            <span className="text-blue-700">Следующий урок: {student.nextLesson}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Журнал оценок */}
          <div>
            <Card className="border-none shadow-lg hover-lift mb-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Icon name="BookOpen" size={20} className="mr-2 text-green-600" />
                    Последние оценки
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentGrades.map((grade, index) => (
                  <div key={index} className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900 text-sm">{grade.student}</h4>
                      <Badge 
                        variant={grade.grade >= 4 ? 'default' : 'secondary'}
                        className={grade.grade >= 4 ? 'bg-green-100 text-green-800 hover:bg-green-100' : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100'}
                      >
                        {grade.grade}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{grade.subject}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{grade.type}</span>
                      <span>{grade.date}</span>
                    </div>
                  </div>
                ))}
                <Button variant="ghost" className="w-full text-sm">
                  <Icon name="ArrowRight" size={14} className="mr-2" />
                  Все оценки
                </Button>
              </CardContent>
            </Card>

            {/* Быстрые действия */}
            <Card className="border-none shadow-lg hover-lift">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center">
                  <Icon name="Zap" size={20} className="mr-2 text-purple-600" />
                  Быстрые действия
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить оценку
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  Назначить урок
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="FileText" size={16} className="mr-2" />
                  Создать отчет
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить уведомление
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Финансовая панель */}
        <Card className="border-none shadow-lg hover-lift mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="CreditCard" size={20} className="mr-2 text-purple-600" />
              Финансовая сводка
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-blue-900">План на месяц</h3>
                  <div className="h-10 w-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Icon name="Target" size={20} className="text-white" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-blue-900">{paymentStats.totalMonth.toLocaleString()} ₽</p>
                <p className="text-blue-700 text-sm mt-1">100% цель</p>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-green-900">Получено</h3>
                  <div className="h-10 w-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <Icon name="CheckCircle" size={20} className="text-white" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-green-900">{paymentStats.paidMonth.toLocaleString()} ₽</p>
                <div className="mt-3">
                  <Progress 
                    value={(paymentStats.paidMonth / paymentStats.totalMonth) * 100} 
                    className="h-2" 
                  />
                  <p className="text-green-700 text-sm mt-1">84% выполнено</p>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-orange-900">Ожидает оплаты</h3>
                  <div className="h-10 w-10 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Icon name="Clock" size={20} className="text-white" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-orange-900">{paymentStats.pendingPayments}</p>
                <p className="text-orange-700 text-sm mt-1">учеников</p>
                <Button size="sm" className="mt-3 bg-orange-500 hover:bg-orange-600 text-white">
                  Отправить напоминания
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;