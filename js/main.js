(function ($) {
    "use strict";

    InitializeBookingCalendar();

})(jQuery);

/* Section: Booking */
function InitializeBookingCalendar() {
    var calendar = $("#bookingCalendar").fullCalendar({
        header:{
            left: 'prev',
            center: 'title',
            right: 'next'
        },
        allDaySlot: false,
        fixedWeekCount: false,
        selectable: true,
        firstDay: 1,
        selectHelper: true,
		select: function(start, end, allDay) {
            //show detail
            console.log(allDay.target);
		}
    });
}