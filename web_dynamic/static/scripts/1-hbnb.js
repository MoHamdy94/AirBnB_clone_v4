$(document).ready(function() {
    const selectedAmenities = []; // Empty array to store amenity IDs
  
    // Function to update the displayed amenity list
    function updateAmenityList() {
      const amenityListText = selectedAmenities.length > 0
        ? selectedAmenities.join(', ') // Join IDs with commas
        : 'All Amenities'; // Display 'All Amenities' if none selected
  
      $('.Amenities h4').text(amenityListText);
    }
  
    // Event listener for checkbox changes
    $('input[type="checkbox"]').change(function() {
      const amenityId = $(this).data('id'); // Get amenity ID from data-id attribute
  
      if ($(this).is(':checked')) {
        selectedAmenities.push(amenityId); // Add ID to array if checked
      } else {
        const index = selectedAmenities.indexOf(amenityId); // Find index of ID
        if (index > -1) {
          selectedAmenities.splice(index, 1); // Remove ID from array if unchecked
        }
      }
  
      updateAmenityList(); // Update displayed list after each change
    });
  });
  