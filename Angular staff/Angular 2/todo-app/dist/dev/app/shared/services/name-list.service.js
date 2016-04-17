"use strict";
var NameListService = (function () {
    function NameListService() {
        this.names = [
            'Edsger Dijkstra',
            'Donald Knuth',
            'Alan Turing',
            'Grace Hopper'
        ];
    }
    NameListService.prototype.get = function () {
        return this.names;
    };
    NameListService.prototype.add = function (value) {
        this.names.push(value);
    };
    return NameListService;
}());
exports.NameListService = NameListService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvbmFtZS1saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQUE7UUFDRSxVQUFLLEdBQUc7WUFDTixpQkFBaUI7WUFDakIsY0FBYztZQUNkLGFBQWE7WUFDYixjQUFjO1NBQ2YsQ0FBQztJQVFKLENBQUM7SUFOQyw2QkFBRyxHQUFIO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELDZCQUFHLEdBQUgsVUFBSSxLQUFhO1FBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUE7QUFkWSx1QkFBZSxrQkFjM0IsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NlcnZpY2VzL25hbWUtbGlzdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE5hbWVMaXN0U2VydmljZSB7XG4gIG5hbWVzID0gW1xuICAgICdFZHNnZXIgRGlqa3N0cmEnLFxuICAgICdEb25hbGQgS251dGgnLFxuICAgICdBbGFuIFR1cmluZycsXG4gICAgJ0dyYWNlIEhvcHBlcidcbiAgXTtcblxuICBnZXQoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLm5hbWVzO1xuICB9XG4gIGFkZCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5uYW1lcy5wdXNoKHZhbHVlKTtcbiAgfVxufVxuIl19
