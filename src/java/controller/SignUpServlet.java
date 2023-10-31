/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package controller;

import DAO.cv;
import DAO.songDAO;
import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.catalina.connector.Response;
import DAO.userDAO;
import entity.userLogin;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import DAO.cv;

/**
 *
 * @author Hi
 */
@WebServlet(name = "SignUpServlet", urlPatterns = {"/SignUpServlet"})
public class SignUpServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        Connection con = null;
        PreparedStatement stm = null;
        Statement s = null;
        try {
            Class.forName(cv.cl);
            con = DriverManager.getConnection(cv.url, cv.u, cv.p);
            String username = request.getParameter("username-su");
            String password = request.getParameter("password-su");
            userLogin user = new userLogin(username, password);
            String sql = "insert into accounts(username, password) values (?, ?)";
            stm = con.prepareCall(sql);
            stm.setString(1, user.getUsername());
            stm.setString(2, user.getPassword());
            stm.execute();
            response.sendRedirect("index.html");

        } catch (Exception ex) {
            Logger.getLogger(songDAO.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            if (stm != null) {
                try {
                    stm.close();
                } catch (SQLException ex) {
                    Logger.getLogger(songDAO.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
            if (con != null) {
                try {
                    con.close();
                } catch (SQLException ex) {
                    Logger.getLogger(songDAO.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
        }
    }

}
