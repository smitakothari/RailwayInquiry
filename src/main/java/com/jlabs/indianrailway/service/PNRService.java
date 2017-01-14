package com.jlabs.indianrailway.service;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.jlabs.indianrailway.domain.PNR;
import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by smita on 1/4/17.
 */
public class PNRService {


    private String currentDate(){

        Date date = new Date();
        String modifiedDate= new SimpleDateFormat("yyyyMMdd").format(date);
        return modifiedDate;
    }

    public PNR getPNR(String PNRNumber) {


        String curentdate = currentDate();
        PNR pnr = null;
        try {

            Client client = Client.create();

            WebResource webResource = client
                    .resource("http://api.railwayapi.com/pnr_status/"+PNRNumber+"/apikey/s6puku2t");

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
            pnr = gson.fromJson(jsonObject, PNR.class);

//            JsonElement element = new JsonPrimitive(outputList.get(0));
//
//            JsonObject result = element.getAsJsonObject();

        } catch (Exception e) {

            e.printStackTrace();

        }
        return pnr;

    }
}
