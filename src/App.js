import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Card } from 'react-bootstrap';
import './App.css';

function App() {
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [birthLocation, setBirthLocation] = useState('');
  const [zodiacInfo, setZodiacInfo] = useState(null);

  const getZodiacSign = (month, day) => {
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Acuario';
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Piscis';
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Tauro';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Géminis';
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cáncer';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra';
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Escorpio';
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagitario';
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricornio';
    return 'Desconocido';
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const [year, month, day] = birthDate.split('-').map(Number);

    const sunSign = getZodiacSign(month, day);

    setZodiacInfo({
      signo: sunSign,
      decanato: 'Cálculo avanzado (requiere más datos)',
      ascendente: 'Cálculo avanzado (requiere más datos)',
      mensaje: 'Para un cálculo preciso del ascendente y decanatos, se necesita una librería astrológica más compleja y la ubicación exacta de nacimiento.'
    });
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Mi Signo Zodiacal</h1>
      <Card className="p-4 shadow">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBirthDate">
            <Form.Label>Fecha de Nacimiento</Form.Label>
            <Form.Control
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBirthTime">
            <Form.Label>Hora de Nacimiento</Form.Label>
            <Form.Control
              type="time"
              value={birthTime}
              onChange={(e) => setBirthTime(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBirthLocation">
            <Form.Label>Lugar de Nacimiento</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Buenos Aires, Argentina"
              value={birthLocation}
              onChange={(e) => setBirthLocation(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Calcular
          </Button>
        </Form>

        {zodiacInfo && (
          <div className="mt-4 text-center">
            <h2>Resultados:</h2>
            <p><strong>Signo Zodiacal:</strong> {zodiacInfo.signo}</p>
            <p><strong>Decanato:</strong> {zodiacInfo.decanato}</p>
            <p><strong>Ascendente:</strong> {zodiacInfo.ascendente}</p>
            <p>{zodiacInfo.mensaje}</p>
          </div>
        )}
      </Card>
    </Container>
  );
}

export default App;