package com.jlabs.indianrailway.domain;

import java.util.List;

/**
 * Created by smita on 1/4/17.
 */
public class Route {


    private String no;
    private String scharr_date;
    private String has_arrived;
    private String scharr;
    private  Station station_;
    private String has_departed;
    private String status;
    private String schdep;
    private String actdep;
    private String day;
    private String distance;

    public Route(String no, String scharr_date, String has_arrived, String scharr, Station station_, String has_departed, String status, String schdep, String actdep, String day, String distance) {
        this.no = no;
        this.scharr_date = scharr_date;
        this.has_arrived = has_arrived;
        this.scharr = scharr;
        this.station_ = station_;
        this.has_departed = has_departed;
        this.status = status;
        this.schdep = schdep;
        this.actdep = actdep;
        this.day = day;
        this.distance = distance;
    }

    public String getNo() {
        return no;
    }

    public void setNo(String no) {
        this.no = no;
    }

    public String getScharr_date() {
        return scharr_date;
    }

    public void setScharr_date(String scharr_date) {
        this.scharr_date = scharr_date;
    }

    public String getHas_arrived() {
        return has_arrived;
    }

    public void setHas_arrived(String has_arrived) {
        this.has_arrived = has_arrived;
    }

    public String getScharr() {
        return scharr;
    }

    public void setScharr(String scharr) {
        this.scharr = scharr;
    }

    public Station getStation_() {
        return station_;
    }

    public void setStation_(Station station_) {
        this.station_ = station_;
    }

    public String getHas_departed() {
        return has_departed;
    }

    public void setHas_departed(String has_departed) {
        this.has_departed = has_departed;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getSchdep() {
        return schdep;
    }

    public void setSchdep(String schdep) {
        this.schdep = schdep;
    }

    public String getActdep() {
        return actdep;
    }

    public void setActdep(String actdep) {
        this.actdep = actdep;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public String getDistance() {
        return distance;
    }

    public void setDistance(String distance) {
        this.distance = distance;
    }
}
