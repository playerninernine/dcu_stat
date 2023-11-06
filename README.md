# dcu_stat
<table>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <!-- Add more table headers as needed -->
    </tr>
    <% data.forEach((item) => { %>
      <tr>
        <td><%= item.id %></td>
        <td><%= item.name %></td>
        <!-- Add more table cells for additional columns -->
      </tr>
    <% }); %>
  </table>