import { Injectable } from '@angular/core';
import { Reserva } from './Reserva';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class Reservaservice {


  public fechaInicio: String;
  public fechaFin: String;
  public email: String;
  public consulta: any
  constructor(private http: HttpClient) { }

   httpOptions = {
    headers: new HttpHeaders(
      { 
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      "Access-Control-Allow-Origin": "http://localhost:8080",
      'Content-Type': 'application/json' ,
      'Accept':  'application/json;profile=urn:org.apache.isis/v1',
      'Authorization': 'Basic aXNpcy1tb2R1bGUtc2VjdXJpdHktYWRtaW46cGFzcw==',    
    })
  };

    addReserva(reservaParameter: Reserva) 
    
    {
       this.fechaInicio = reservaParameter.fechaInicio;
       this.fechaFin = reservaParameter.fechaFin;
       this.email=reservaParameter.email;
    
    
      const httpOptions = {
        headers: new HttpHeaders(
        { 
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          "Access-Control-Allow-Origin": "http://localhost:8080",
          'Content-Type': 'application/json' ,
          'Accept':  'application/json;profile=urn:org.apache.isis/v1',
          'Authorization': 'Basic aXNpcy1tb2R1bGUtc2VjdXJpdHktYWRtaW46cGFzcw==',    
         })
        };
    
           this.consulta = this.http.post('http://localhost:8080/restful/services/ReservaHabitacion/actions/crearReservaDeHabitacion/invoke',
            {
             "fechaInicio": {
             "value": this.fechaInicio
            },
              "fechaFin": {
              "value": this.fechaFin
            },
               "email": {
               "value": this.email
            }
          }
           , httpOptions);
             console.log("Consulta: "+ JSON.stringify(this.consulta));
             return this.consulta;
             
  }


  getReserva(id): Observable<Reserva[]> {
    return this.http.get<Reserva[]>('http://localhost:3000/api/get-Reserva/' + id)
      .pipe(
        tap(_ => console.log(`Reserva fetched: ${id}`)),
        catchError(this.handleError<Reserva[]>(`Get Reserva id=${id}`))
      );
  }

  getReservaList(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>('http://localhost:8080/restful/services/Habitacion/actions/listarHabitacionesOcupadas/invoke', this.httpOptions)
      .pipe(
        tap(reservas => console.log('Reservas fetched!')),
        catchError(this.handleError<Reserva[]>('Get Reservas', []))
      );
  }

  updateReserva(id, Reserva: Reserva): Observable<any> {
    return this.http.put('http://localhost:3000/api/update-Reserva/' + id, Reserva, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Reserva updated: ${id}`)),
        catchError(this.handleError<Reserva[]>('Update Reserva'))
      );
  }

  deleteReserva(id): Observable<Reserva[]> {
    return this.http.delete<Reserva[]>('http://localhost:3000/api/delete-Reserva/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Reserva deleted: ${id}`)),
        catchError(this.handleError<Reserva[]>('Delete Reserva'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}