package com.jlabs.indianrailway.domain;

import java.util.List;

/**
 * Created by smita on 1/3/17.
 */
public class Railway {

    private String position;
    private String error;
    private String start_date;
    private List<Route> route;
    private String response_code;

    public Railway(String position, String error, String start_date, List<Route> routes) {
        this.position = position;
        this.error = error;
        this.start_date = start_date;
        this.route = routes;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    public String getStart_date() {
        return start_date;
    }

    public void setStart_date(String start_date) {
        this.start_date = start_date;
    }

    public List<Route> getRoute() {
        return route;
    }

    public void setRoute(List<Route> route) {
        this.route = route;
    }

    public String getResponse_code() {
        return response_code;
    }

    public void setResponse_code(String response_code) {
        this.response_code = response_code;
    }
}
