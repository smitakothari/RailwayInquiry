package com.jlabs.indianrailway.service;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.jlabs.indianrailway.domain.Railway;
import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class RailwayEnquiry {


    private String currentDate(){

        Date date = new Date();
        String modifiedDate= new SimpleDateFormat("yyyyMMdd").format(date);
        return modifiedDate;
    }
    
    public Railway enquiry(String trainNumber,String doj) {


      String curentdate = doj.replace("-","");
        Railway railway = null;
        try {

            Client client = Client.create();

            WebResource webResource = client
                    .resource("http://api.railwayapi.com/live/train/"+trainNumber+"/doj/"+curentdate+"/apikey/s6puku2t");

            ClientResponse response = webResource.accept("application/json")
                    .get(ClientResponse.class);

            if (response.getStatus() != 200) {
                throw new RuntimeException("Failed : HTTP error code : "
                        + response.getStatus());
            }

            String output = response.getEntity(String.class);


             List<String> outputList = new ArrayList<>();
            outputList.add(output);

            System.out.println("Output from Server .... \n");
            System.out.println(output);
            JsonParser jsonParser = new JsonParser();
            JsonObject jsonObject = (JsonObject) jsonParser.parse(output);

            Gson gson = new Gson();
            railway = gson.fromJson(jsonObject, Railway.class);

//            JsonElement element = new JsonPrimitive(outputList.get(0));
//
//            JsonObject result = element.getAsJsonObject();

        } catch (Exception e) {

            e.printStackTrace();

        }
return railway;

    }

}