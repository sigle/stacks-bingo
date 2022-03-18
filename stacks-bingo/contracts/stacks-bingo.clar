
;; stacks-bingo
;; <add a description here>

;; constants
;;
(define-constant contract-owner tx-sender)

;; constants errors
;;
(define-constant err-not-authorized (err u403))

;; data maps and vars
;;

;; private functions
;;

;; public functions
;;

(define-public (delegate-stx (amount-ustx uint) (delegate-to principal))
  (begin
    (try! (contract-call? 'ST000000000000000000002AMW42H.pox delegate-stx amount-ustx delegate-to none none))
    (ok true)))
