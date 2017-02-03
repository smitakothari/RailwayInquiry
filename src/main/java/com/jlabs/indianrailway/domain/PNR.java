package com.jlabs.indianrailway.domain;

import java.util.List;

/**
 * Created by smita on 1/4/17.
 */
public class PNR {

    public String pnr;

    private List<Passenger> passengers;

    public PNR(String pnr) {
        this.pnr = pnr;
    }

    public String getPnr() {
        return pnr;
    }

    public void setPnr(String pnr) {
        this.pnr = pnr;
    }

    public List<Passenger> getPassengers() {
        return passengers;
    }

    public void setPassengers(List<Passenger> passengers) {
        this.passengers = passengers;
    }
}
