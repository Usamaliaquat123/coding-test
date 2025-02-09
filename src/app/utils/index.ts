// utils 

import { ContactInfo } from "../../../types/contact";
  
  /**
   * Handles phone call functionality
   * @param phone - Phone number to call
   * @returns void
   */
  export const handlePhoneCall = (phone: string): void => {
    // Clean the phone number (remove spaces, dashes, etc.)
    const cleanPhone = phone.replace(/[^\d+]/g, '');
    
    // Check if device supports tel protocol
    if (typeof window !== 'undefined') {
      // For mobile devices
      if (/android|iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase())) {
        window.location.href = `tel:${cleanPhone}`;
      } else {
        window.alert(`Call this number: ${phone}`);
      }
    }
  };
  
  /**
   * Handles email functionality
   * @param contactInfo - Object containing email and optional subject/body
   * @returns void
   */
  export const handleEmail = ({
    email,
    name = '',
    message = ''
  }: ContactInfo): void => {
    if (!email) return;
  
    const subject = encodeURIComponent(`Inquiry about property from ${name}`);
    const body = encodeURIComponent(message || 'I am interested in this property. Please contact me with more information.');
    
    if (typeof window !== 'undefined') {
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }
  };
  
  /**
   * Handles WhatsApp functionality
   * @param contactInfo - Object containing phone and optional message
   * @returns void
   */
  export const handleWhatsApp = ({
    phone,
    name = '',
    message = ''
  }: ContactInfo): void => {
    if (!phone) return;
  
    // Clean the phone number
    const cleanPhone = phone.replace(/[^\d+]/g, '');
    
    // Prepare the message
    const defaultMessage = `Hi, I am ${name}. I am interested in your property listing.`;
    const whatsappMessage = encodeURIComponent(message || defaultMessage);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${whatsappMessage}`;
    
    if (typeof window !== 'undefined') {
      // Open in new tab
      window.open(whatsappUrl, '_blank');
    }
  };
  
  /**
   * General contact handler that can be used for multiple purposes
   * @param method - Contact method ('phone', 'email', 'whatsapp')
   * @param contactInfo - Contact information object
   * @returns void
   */
  export const handleContact = (
    method: 'phone' | 'email' | 'whatsapp',
    contactInfo: ContactInfo
  ): void => {
    switch (method) {
      case 'phone':
        if (contactInfo.phone) {
          handlePhoneCall(contactInfo.phone);
        }
        break;
      
      case 'email':
        handleEmail(contactInfo);
        break;
      
      case 'whatsapp':
        handleWhatsApp(contactInfo);
        break;
        
      default:
        console.error('Invalid contact method');
    }
  };