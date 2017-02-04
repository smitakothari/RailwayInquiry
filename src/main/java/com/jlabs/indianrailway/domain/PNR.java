package com.jlabs.indianrailway.domain;

import java.util.List;

/**
 * Created by smita on 1/4/17.
 */
public class PNR {

    public String pnr;

    private List<Passenger> passengers;
    private String chart_prepared;
    private String train_name;
    private String train_num;
    private String doj;

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

    public String getChart_prepared() {
        return chart_prepared;
    }

    public void setChart_prepared(String chart_prepared) {
        this.chart_prepared = chart_prepared;
    }

    public String getTrain_name() {
        return train_name;
    }

    public void setTrain_name(String train_name) {
        this.train_name = train_name;
    }

    public String getTrain_num() {
        return train_num;
    }

    public void setTrain_num(String train_num) {
        this.train_num = train_num;
    }

    public String getDoj() {
        return doj;
    }

    public void setDoj(String doj) {
        this.doj = doj;
    }


}
