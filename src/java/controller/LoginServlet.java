/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */

package controller;

import com.mysql.jdbc.Driver;
import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.Console;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.FileWriter;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import org.apache.tomcat.dbcp.dbcp2.DriverManagerConnectionFactory;
import org.apache.tomcat.jakartaee.commons.io.IOUtils;

/**
 *
 * @author Hi
 */
@WebServlet(name = "LoginServlet", urlPatterns = { "/LoginServlet" })
public class LoginServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");

        PrintWriter out = response.getWriter();

        String username = request.getParameter("username");
        String password = request.getParameter("password");

        Connection con = null;
        Statement stm = null;

        try {
            Class.forName("com.mysql.jdbc.Driver");
            con = DriverManager.getConnection("jdbc:mysql://localhost:3306/musicapp", "root", "");
            stm = con.createStatement();
            String sql = "select * from accounts where username = '" + username + "' and password = '" + password + "'";
            ResultSet rs = stm.executeQuery(sql);
            if (rs.next()) {
                response.sendRedirect("home.html");
            } else {
                response.sendRedirect("index.html");
            }
             con.close();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

    }
    
    
}
