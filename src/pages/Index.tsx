import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeTab, setActiveTab] = useState<'graphic' | 'motion'>('graphic');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const graphicWorks = [
    {
      title: 'Корпоративная айдентика',
      description: 'Разработка логотипа и фирменного стиля для IT-компании',
      image: '/img/7cbb3867-c288-4db8-b768-1afcf70a3064.jpg',
      tags: ['Логотип', 'Брендинг', 'Фирменный стиль']
    },
    {
      title: 'Дизайн упаковки',
      description: 'Создание привлекательной упаковки для продуктов питания',
      image: '/img/d8aa3520-92f7-4ef8-b73a-bc30616ebc18.jpg',
      tags: ['Упаковка', 'Иллюстрация', 'Печать']
    },
    {
      title: 'Рекламная кампания',
      description: 'Комплексная визуальная концепция для рекламной кампании',
      image: '/placeholder.svg',
      tags: ['Реклама', 'Концепция', 'Визуал']
    }
  ];

  const motionWorks = [
    {
      title: 'Анимационный ролик',
      description: 'Создание 2D анимации для презентации продукта',
      image: '/img/0fb7498d-3e91-436e-b5d0-7bc238750b8e.jpg',
      tags: ['2D анимация', 'Презентация', 'Видео']
    },
    {
      title: 'Заставка для канала',
      description: 'Динамичная заставка для YouTube канала',
      image: '/placeholder.svg',
      tags: ['Заставка', 'YouTube', 'Моушн']
    },
    {
      title: 'UI анимация',
      description: 'Анимация интерфейсных элементов для мобильного приложения',
      image: '/placeholder.svg',
      tags: ['UI/UX', 'Мобильное', 'Интерфейс']
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Сообщение отправлено! Скоро свяжусь с вами.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-retro-beige font-system">
      {/* Header */}
      <header className="bg-retro-gray border-b-2 border-retro-dark p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-retro-blue border-2 border-retro-dark flex items-center justify-center">
              <Icon name="Palette" size={20} />
            </div>
            <h1 className="text-2xl font-mono font-bold text-retro-dark">PORTFOLIO.EXE</h1>
          </div>
          <nav className="flex gap-1">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-2 border-retro-dark bg-retro-gray hover:bg-retro-white font-mono"
            >
              Главная
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-2 border-retro-dark bg-retro-gray hover:bg-retro-white font-mono"
            >
              Портфолио
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-2 border-retro-dark bg-retro-gray hover:bg-retro-white font-mono"
            >
              Контакты
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-retro-white border-2 border-retro-dark p-8 mb-8 shadow-[4px_4px_0px_0px_#2C2C2C]">
            <h2 className="text-4xl font-mono font-bold text-retro-dark mb-4">
              ГРАФИЧЕСКИЙ ДИЗАЙНЕР
            </h2>
            <p className="text-lg text-retro-dark mb-6">
              Создаю современные решения в стиле ретро
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="bg-retro-blue hover:bg-blue-400 border-2 border-retro-dark font-mono shadow-[2px_2px_0px_0px_#2C2C2C] w-full sm:w-auto"
                size="lg"
              >
                <Icon name="Download" size={20} className="mr-2" />
                Скачать резюме
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-retro-dark bg-retro-white hover:bg-retro-gray font-mono shadow-[2px_2px_0px_0px_#2C2C2C] w-full sm:w-auto"
                size="lg"
              >
                <Icon name="Mail" size={20} className="mr-2" />
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-4 bg-retro-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-mono font-bold text-retro-dark mb-4">
              МОИ РАБОТЫ
            </h2>
            <p className="text-retro-dark">Портфолио графического и motion дизайна</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-col sm:flex-row border-2 border-retro-dark bg-retro-gray w-full sm:w-auto max-w-md">
              <Button
                variant={activeTab === 'graphic' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('graphic')}
                className={`rounded-none border-r-0 sm:border-r-2 border-b-2 sm:border-b-0 border-retro-dark font-mono text-sm sm:text-base px-3 sm:px-4 ${
                  activeTab === 'graphic' 
                    ? 'bg-retro-blue text-white' 
                    : 'bg-retro-gray hover:bg-retro-white'
                }`}
              >
                <Icon name="Image" size={16} className="mr-2" />
                Графический дизайн
              </Button>
              <Button
                variant={activeTab === 'motion' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('motion')}
                className={`rounded-none font-mono text-sm sm:text-base px-3 sm:px-4 ${
                  activeTab === 'motion' 
                    ? 'bg-retro-blue text-white' 
                    : 'bg-retro-gray hover:bg-retro-white'
                }`}
              >
                <Icon name="Play" size={16} className="mr-2" />
                Motion дизайн
              </Button>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeTab === 'graphic' ? graphicWorks : motionWorks).map((work, index) => (
              <Card key={index} className="border-2 border-retro-dark shadow-[4px_4px_0px_0px_#2C2C2C] bg-retro-white">
                <CardHeader className="p-4">
                  <div className="aspect-video bg-retro-gray border-2 border-retro-dark mb-4 flex items-center justify-center overflow-hidden">
                    <img 
                      src={work.image} 
                      alt={work.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="font-mono text-retro-dark">{work.title}</CardTitle>
                  <CardDescription className="text-retro-dark">{work.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {work.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="outline" 
                        className="border-2 border-retro-dark bg-retro-beige font-mono text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-2 border-retro-dark bg-retro-gray hover:bg-retro-white font-mono"
                  >
                    <Icon name="Eye" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-retro-beige">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-mono font-bold text-retro-dark mb-4">
              СВЯЗАТЬСЯ СО МНОЙ
            </h2>
            <p className="text-retro-dark">Готов обсудить ваш проект</p>
          </div>

          <Card className="border-2 border-retro-dark shadow-[4px_4px_0px_0px_#2C2C2C] bg-retro-white">
            <CardHeader className="p-6">
              <CardTitle className="font-mono text-retro-dark">Форма обратной связи</CardTitle>
              <CardDescription className="text-retro-dark">
                Заполните форму и я свяжусь с вами в ближайшее время
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-mono font-bold text-retro-dark mb-2">
                    Имя:
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-2 border-retro-dark bg-retro-white font-mono"
                    placeholder="Ваше имя"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono font-bold text-retro-dark mb-2">
                    Email:
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-2 border-retro-dark bg-retro-white font-mono"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono font-bold text-retro-dark mb-2">
                    Сообщение:
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-2 border-retro-dark bg-retro-white font-mono min-h-24"
                    placeholder="Расскажите о вашем проекте..."
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-retro-blue hover:bg-blue-400 border-2 border-retro-dark font-mono shadow-[2px_2px_0px_0px_#2C2C2C]"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>

          <Separator className="my-8 bg-retro-dark" />

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-retro-blue border-2 border-retro-dark flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={24} className="text-white" />
              </div>
              <h3 className="font-mono font-bold text-retro-dark mb-2">Email</h3>
              <p className="text-retro-dark font-mono">designer@example.com</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-retro-blue border-2 border-retro-dark flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={24} className="text-white" />
              </div>
              <h3 className="font-mono font-bold text-retro-dark mb-2">Телефон</h3>
              <p className="text-retro-dark font-mono">+7 (999) 123-45-67</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-retro-blue border-2 border-retro-dark flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={24} className="text-white" />
              </div>
              <h3 className="font-mono font-bold text-retro-dark mb-2">Локация</h3>
              <p className="text-retro-dark font-mono">Москва, Россия</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-retro-dark text-retro-white p-4">
        <div className="container mx-auto text-center">
          <p className="font-mono">© 2024 PORTFOLIO.EXE | Все права защищены</p>
        </div>
      </footer>
    </div>
  );
}