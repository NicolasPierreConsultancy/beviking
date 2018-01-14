CREATE TABLE BOOKINGS(
    BookingID int PRIMARY KEY,
    ServiceID int,
    CustomerID int,
    Booking_StartDate TIMESTAMP NOT NULL,
    Booking_EndDate TIMESTAMP NOT NULL,
    BookedDate TIMESTAMP NOT NULL
)