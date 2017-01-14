package com.jlabs.indianrailway.domain;

/**
 * Created by smita on 1/8/17.
 */
public class Passenger {

    private String no;
    private String booking_status;
    private String current_status;
    private String coach_position;

    public Passenger(String no, String booking_status, String current_status, String coach_position) {
        this.no = no;
        this.booking_status = booking_status;
        this.current_status = current_status;
        this.coach_position = coach_position;
    }

    public String getNo() {
        return no;
    }

    public void setNo(String no) {
        this.no = no;
    }

    public String getBooking_status() {
        return booking_status;
    }

    public void setBooking_status(String booking_status) {
        this.booking_status = booking_status;
    }

    public String getCurrent_status() {
        return current_status;
    }

    public void setCurrent_status(String current_status) {
        this.current_status = current_status;
    }

    public String getCoach_position() {
        return coach_position;
    }

    public void setCoach_position(String coach_position) {
        this.coach_position = coach_position;
    }
}
