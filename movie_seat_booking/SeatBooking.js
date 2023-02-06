import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const seats = [
  { row: 'A', seats: ['A1', 'A2', 'A3', 'A4', 'A5'], price: 100 },
  { row: 'B', seats: ['B1', 'B2', 'B3', 'B4', 'B5'], price: 200 },
  { row: 'C', seats: ['C1', 'C2', 'C3', 'C4', 'C5'], price: 300 },
  { row: 'D', seats: ['D1', 'D2', 'D3', 'D4', 'D5'], price: 400 },
  { row: 'E', seats: ['E1', 'E2', 'E3', 'E4', 'E5'], price: 500 },
];

const Seat = ({ seat, price, selected, onSelect }) => {
  return (
    <TouchableOpacity
      style={[styles.seat, selected ? styles.selected : null]}
      onPress={() => onSelect(seat)}>
      <Text style={styles.seatText}>{seat}</Text>
    </TouchableOpacity>
  );
};

const SeatBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedSeatColor, setSelectedSeatColor] = useState("blue");

  const handleSeatPress = (seat) => {
    if(selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seat))
    } else {
      setSelectedSeats([...selectedSeats, seat])
    }
  }

  const totalPrice = selectedSeats.reduce((acc, seat) => {
    const row = seats.find((r) => r.seats.includes(seat));
    return acc + row.price;
  }, 0);

  const handleBooking = () => {
    if(selectedSeatColor === "blue") {
      setSelectedSeatColor('grey');
    }else {
      setSelectedSeatColor("blue")
    }
    console.log(
      `Booked Seat Number : ${selectedSeats.join(
        ', '
      )} for a total of : Rs.${totalPrice}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
      Screen Here
      <hr />
      </Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.seat, selectedSeats.includes('A1') && { backgroundColor: selectedSeatColor }]}
          onPress={() => handleSeatPress('A1')}
        >
          <Text style={styles.seatText}>A1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.seat, selectedSeats.includes('A2') && { backgroundColor: selectedSeatColor }]}
          onPress={() => handleSeatPress('A2')}
        >
          <Text style={styles.seatText}>A2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.seat, selectedSeats.includes('A3') && { backgroundColor: selectedSeatColor }]}
          onPress={() => handleSeatPress('A3')}
        >
          <Text style={styles.seatText}>A3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.seat, selectedSeats.includes('A4') && { backgroundColor: selectedSeatColor }]}
          onPress={() => handleSeatPress('A4')}
        >
          <Text style={styles.seatText}>A4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.seat, selectedSeats.includes('A5') && { backgroundColor: selectedSeatColor }]}
          onPress={() => handleSeatPress('A5')}
        >
          <Text style={styles.seatText}>A5</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.seat, selectedSeats.includes('B1') && { backgroundColor: selectedSeatColor }]}
          onPress={() => handleSeatPress('B1')}
        >
          <Text style={styles.seatText}>B1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.seat, selectedSeats.includes('B2') && { backgroundColor: selectedSeatColor }]}
          onPress={() => handleSeatPress('B2')}
        >
          <Text style={styles.seatText}>B2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.seat, selectedSeats.includes('B3') && { backgroundColor: selectedSeatColor }]}
          onPress={() => handleSeatPress('B3')}
        >
          <Text style={styles.seatText}>B3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.seat, selectedSeats.includes('B4') && { backgroundColor: selectedSeatColor }]}
          onPress={() => handleSeatPress('B4')}
        >
          <Text style={styles.seatText}>B4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.seat, selectedSeats.includes('B5') && { backgroundColor: selectedSeatColor }]}
          onPress={() => handleSeatPress('B5')}
        >
          <Text style={styles.seatText}>B5</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.seat, selectedSeats.includes('C1') && { backgroundColor: selectedSeatColor }]}
          onPress={() => handleSeatPress('C1')}
        >
          <Text style={styles.seatText}>C1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.seat, selectedSeats.includes('C2') && { backgroundColor: selectedSeatColor }]}
          onPress={() => handleSeatPress('C2')}
        >
          <Text style={styles.seatText}>C2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.seat, selectedSeats.includes('C3') && { backgroundColor: selectedSeatColor }]}
          onPress={() => handleSeatPress('C3')}
        >
          <Text style={styles.seatText}>C3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.seat, selectedSeats.includes('C4') && { backgroundColor: selectedSeatColor }]}
          onPress={() => handleSeatPress('C4')}
        >
          <Text style={styles.seatText}>C4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.seat, selectedSeats.includes('C5') && { backgroundColor: selectedSeatColor }]}
          onPress={() => handleSeatPress('C5')}
        >
          <Text style={styles.seatText}>C5</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.seat, selectedSeats.includes('D1') && { backgroundColor: selectedSeatColor }]}
          onPress={() => handleSeatPress('D1')}
        >
          <Text style={styles.seatText}>D1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.seat, selectedSeats.includes('D2') && { backgroundColor: selectedSeatColor }]}
          onPress={() => handleSeatPress('D2')}
        >
          <Text style={styles.seatText}>D2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.seat, selectedSeats.includes('D3') && { backgroundColor: selectedSeatColor }]}
          onPress={() => handleSeatPress('D3')}
        >
          <Text style={styles.seatText}>D3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.seat, selectedSeats.includes('D4') && { backgroundColor: selectedSeatColor }]}
          onPress={() => handleSeatPress('D4')}
        >
          <Text style={styles.seatText}>D4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.seat, selectedSeats.includes('D5') && { backgroundColor: selectedSeatColor }]}
          onPress={() => handleSeatPress('D5')}
        >
          <Text style={styles.seatText}>D5</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.seat, selectedSeats.includes('E1') && { backgroundColor: selectedSeatColor }]}
          onPress={() => handleSeatPress('E1')}
        >
          <Text style={styles.seatText}>E1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.seat, selectedSeats.includes('E2') && { backgroundColor: selectedSeatColor }]}
          onPress={() => handleSeatPress('E2')}
        >
          <Text style={styles.seatText}>E2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.seat, selectedSeats.includes('E3') && { backgroundColor: selectedSeatColor }]}
          onPress={() => handleSeatPress('E3')}
        >
          <Text style={styles.seatText}>E3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.seat, selectedSeats.includes('E4') && { backgroundColor: selectedSeatColor }]}
          onPress={() => handleSeatPress('E4')}
        >
          <Text style={styles.seatText}>E4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.seat, selectedSeats.includes('E5') && { backgroundColor: selectedSeatColor }]}
          onPress={() => handleSeatPress('E5')}
        >
          <Text style={styles.seatText}>E5</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.price}>Total Price: Rs.{totalPrice}</Text>
      <Button style={styles.bookNow} title="Book Now" onPress={handleBooking} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  seat: {
    width: 50,
    height: 30,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderRadius: 10,
  },
  selected: {
    backgroundColor: 'blue',
    borderColor: 'blue',
  },
  seatText: {
    color: '#fff',
  },
  price: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  bookNow: {
    fontSize: 20,
  },
});

export default SeatBooking;
